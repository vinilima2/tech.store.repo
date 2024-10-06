import { Currency, Installment } from '@tstore/core'
import { IconCreditCard } from '@tabler/icons-react'

export interface PaymentSummaryProps {
    quantityItems: number
    totalValue: number
    fullValue: number
    installment: Installment
    endPurchase: () => void
    className?: string
}

export default function PaymentSummary(props: PaymentSummaryProps) {
    return (
        <div
            className={`
                flex flex-col self-start gap-3 
                w-96 px-6 py-8
                bg-violet-dark rounded-xl
                ${props.className ?? ''}
            `}
        >
            <span className="text-xl font-semibold">Resume:</span>
            <div className="flex justify-between">
                <span className="text-zinc-400">Payment Type:</span>
                <span>PIX/Ticket</span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Total Value:</span>
                <span className="text-emerald-500 font-semibold">
                    {Currency.format(props.fullValue)}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Discount:</span>
                <span className="text-red-500 font-semibold">
                    -{Currency.format(props.fullValue - props.totalValue)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-zinc-400">in Cash on PIX/Ticket</span>
                <span className="text-emerald-500 font-semibold text-2xl">
                    {Currency.format(props.totalValue ?? 0)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm text-zinc-300 mt-2">
                    Installment on card
                </span>
                <div className="text-sm text-zinc-300">
                   in until{' '}
                    <span className="text-white font-semibold">
                        {props.installment.installmentQuantity}x
                    </span>{' '}
                    from{' '}
                    <span className="text-white font-semibold">
                        {Currency.format(props.installment.installmentValue)}
                    </span>
                </div>
            </div>
            <button
                onClick={props.endPurchase}
                className="button bg-indigo-700 mt-7"
            >
                <IconCreditCard size={20} />
                <span>End Purchase</span>
            </button>
        </div>
    )
}
