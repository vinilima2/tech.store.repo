'use client'
import { products } from '@tstore/core'
import ProductItem from './ProductItem'
import ProductNotFound from './ProductNotFound'

export default function ProductList() {
   
    return products.length ? (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    ) : (
        <ProductNotFound noBackButton />
    )
}