import {PaymentType} from '@tstore/core'

export interface PaymentTypeSelectionProps {
    paymentType?: PaymentType
    changedPaymentType?: (value: PaymentType) => void
    className?: string
}

export default function PaymentTypeSelection(
    props: PaymentTypeSelectionProps,
) {
    function renderItem(label: string, type: PaymentType) {
        const selected = props.paymentType === type
        return (
            <button
                className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
                onClick={() => props.changedPaymentType?.(type)}
            >
                <span
                    className={`
                        ${selected ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-white'}
                        w-5 h-5 border-2 rounded-full
                    `}
                ></span>
                <span>{label}</span>
            </button>
        )
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Payments Type
            </span>
            <div className="flex flex-col gap-3">
                {renderItem('PIX', PaymentType.PIX)}
                {renderItem('TICKET', PaymentType.TICKET)}
                {renderItem('CREDIT CART', PaymentType.CARD)}
            </div>
        </div>
    )
}
