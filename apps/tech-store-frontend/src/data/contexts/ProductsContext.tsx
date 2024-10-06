'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Filter, Product } from '@tstore/core'
import useAPI from '../hooks/useAPI'

export interface ProductsContextProps {
    products: Product[]
    search: string
    setSearch: (search: string) => void
    findById: (id: number) => Product | null
}

const ProductsContext = createContext<ProductsContextProps>({} as any)

export function ProductsProvider(props: any) {
    const { httpGet } = useAPI()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = useCallback(async () => {
        const products = await httpGet('/products')
        setProducts(products ?? [])
    }, [httpGet])

    useEffect(() => {
        loadProducts().then()
    }, [loadProducts])

    return (
        <ProductsContext.Provider
            value={{
                search: search,
                get products() {
                    if (!search) return products
                    return new Filter().execute(search, products)
                },
                setSearch: setSearch,
                findById: (id: number) =>
                    products.find((produto) => produto.id === id) ?? null,
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext
