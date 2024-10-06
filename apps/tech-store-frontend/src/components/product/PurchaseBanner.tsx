'use client'
import {IconCreditCard, IconShoppingCart} from '@tabler/icons-react'
import {Currency, Product} from '@tstore/core'
import useInstallment from '@/data/hooks/useInstallment'
import {useRouter} from 'next/navigation'
import useCart from "@/data/hooks/useCart";

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const router = useRouter()
    const {product} = props
    const installment = useInstallment(product.promotionalPrice)
    const {addItem} = useCart()
    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">from {Currency.format(product?.basePrice)}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">to</span>{' '}
                    <span className="text-emerald-500">{Currency.format(product?.promotionalPrice)}</span>{' '}
                    <span className="text-base text-zinc-300">buy in cash</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{installment.installmentQuantity}x from</span>
                {Currency.format(installment.installmentValue)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600"
                    onClick={() => {
                        addItem(product)
                    }}
                >
                    <IconShoppingCart size={20}/>
                    <span>Add</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                        router.push('/checkout/payment')
                    }}
                >
                    <IconCreditCard size={20}/>
                    <span>Buy</span>
                </button>
            </div>
        </div>
    )
}
