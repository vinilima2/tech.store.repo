'use client'
import CheckoutHeader from '@/components/checkout/CheckoutHeader'
import DeliveryForm from '@/components/checkout/payment/DeliveryForm'
import PaymentSummary from '@/components/checkout/payment/PaymentSummary'
import PaymentTypeSelection from '@/components/checkout/payment/PaymentTypeSelection'
import useCart from '@/data/hooks/useCart'
import usePayment from '@/data/hooks/usePayment'

export default function Payment() {
    const {installment, quantityItems, totalValue, fullValue} = useCart()
    const {delivery, paymentType, changeDelivery, changePaymentType, endPurchase} =
        usePayment()

    return (
        <div className="flex flex-col gap-7 container">
            <CheckoutHeader step="payment"/>
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <PaymentTypeSelection
                        paymentType={paymentType}
                        changedPaymentType={changePaymentType}
                    />
                    <DeliveryForm delivery={delivery} changedDelivery={changeDelivery}/>
                </div>
                <PaymentSummary
                    quantityItems={quantityItems}
                    totalValue={totalValue}
                    fullValue={fullValue}
                    installment={installment}
                    endPurchase={endPurchase}
                    className="mt-12"
                />
            </div>
        </div>
    )
}
