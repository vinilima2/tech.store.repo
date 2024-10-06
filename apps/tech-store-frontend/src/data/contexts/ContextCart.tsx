'use client'
import {
    InstallmentCalculation,
    Cart,
    CartItem,
    Installment,
    Product,
} from '@tstore/core'
import {createContext, useEffect, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextCartProps {
    items: CartItem[]
    quantityItems: number
    fullValue: number
    totalValue: number
    installment: Installment
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

const ContextCart = createContext<ContextCartProps>({} as any)

export function CartProvider(props: any) {
    const {save, get} = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    function addItem(produto: Product) {
        changeCart(cart.addItem(produto))
    }

    function removeItem(produto: Product) {
        changeCart(cart.removeItem(produto))
    }

    function removeProduct(produto: Product) {
        changeCart(cart.removeProduct(produto))
    }

    function clearCart() {
        changeCart(cart.clear())
    }

    function changeCart(cart: Cart) {
        save('cart', cart.items)
        setCart(cart)
    }

    useEffect(() => {
        const savedItems: CartItem[] = get('cart')
        if (savedItems) setCart(new Cart(savedItems))
    }, [get])

    return (
        <ContextCart.Provider
            value={{
                items: cart.items,
                quantityItems: cart.itemsQuantity,
                totalValue: cart.totalValue,
                fullValue: cart.fullValue,
                installment: new InstallmentCalculation().execute(
                    cart.totalValue,
                ),
                addItem: addItem,
                removeItem: removeItem,
                removeProduct: removeProduct,
                clearCart: clearCart,
            }}
        >
            {props.children}
        </ContextCart.Provider>
    )
}

export default ContextCart
