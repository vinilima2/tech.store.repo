'use client'
import CheckoutHeader from "@/components/checkout/CheckoutHeader"
import CartItem from "@/components/checkout/cart/CartItem"
import EmptyCart from "@/components/checkout/cart/EmptyCart"
import TotalCart from "@/components/checkout/cart/TotalCart"
import useCart from "@/data/hooks/useCart"

export default function Cart() {
    const {
        items,
        quantityItems,
        totalValue,
        addItem,
        removeItem,
        removeProduct,
    } = useCart()

    return (
        <div className="flex flex-col gap-5 container">
            <CheckoutHeader step="cart" />
            <div className="flex flex-col gap-4">
                {items.length === 0 && <EmptyCart />}
                {items.map((item: any) => (
                    <CartItem
                        key={item.produto.id}
                        item={item}
                        addItem={() => addItem(item.produto)}
                        removeItem={() => removeItem(item.produto)}
                        removeProduct={() => removeProduct(item.produto)}
                    />
                ))}
            </div>
            <TotalCart quantityItems={quantityItems} totalValue={totalValue} />
        </div>
    )
}