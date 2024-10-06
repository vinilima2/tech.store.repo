'use client'
import {
    OrderItem,
    Order,
    DeliveryOrder,
    Status,
    PaymentType,
    CartItem,
} from '@tstore/core'
import {createContext, useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCart from '../hooks/useCart'
import useAPI from '../hooks/useAPI'

export interface PaymentContextProps {
    paymentType: PaymentType
    delivery: Partial<DeliveryOrder>
    changePaymentType: (payment: PaymentType) => void
    changeDelivery: (delivery: Partial<DeliveryOrder>) => void
    endPurchase: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
    const {httpPost} = useAPI()
    const {items, totalValue, clearCart} = useCart()
    const {save, get} = useLocalStorage()
    const router = useRouter()

    const [paymentType, setPaymentType] = useState<PaymentType>(
        PaymentType.PIX,
    )
    const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({})

    function changePaymentType(paymentType: PaymentType) {
        save('paymentType', paymentType)
        setPaymentType(paymentType)
    }

    function changeDelivery(delivery: Partial<DeliveryOrder>) {
        save('delivery', delivery)
        setDelivery(delivery)
    }

    async function endPurchase() {
        const order: Partial<Order> = {
            date: new Date(),
            paymentType: paymentType,
            totalValue: totalValue,
            delivery: delivery as DeliveryOrder,
            status: Status.RECEIVED,
            items: items.map(
                (item: CartItem) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        unitPrice: item.product.promotionalPrice,
                    }) as OrderItem,
            ),
        }

        await httpPost('/orders', order)
        clearCart()
        router.push('/checkout/success')
    }

    useEffect(() => {
        const delivery = get('delivery')
        const paymentType = get('paymentType')
        if (delivery) setDelivery(delivery)
        if (paymentType) setPaymentType(paymentType)
    }, [get])

    return (
        <PaymentContext.Provider
            value={{
                delivery: delivery,
                paymentType: paymentType,
                changeDelivery: changeDelivery,
                changePaymentType: changePaymentType,
                endPurchase: endPurchase,
            }}
        >
            {props.children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext
