import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import CheckoutHeader from '@/src/components/checkout/CheckoutHeader'
import DeliveryForm from '@/src/components/checkout/payment/DeliveryForm'
import PaymentResume from '@/src/components/checkout/payment/PaymentResume'
import PaymentTypeSelection from '@/src/components/checkout/payment/PaymentTypeSelection'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'

export default function Payment() {
    const { installment, quantityItems, totalValue, fullValue } = useCart()
    const { delivery, paymentType, changeDelivery, changePaymentType, endPurchase } =
        usePayment()

    return (
        <SafeAreaView style={styles.container}>
            <CheckoutHeader step="payment" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.titulo}>Payment Type</Text>
                <PaymentTypeSelection
                    paymentType={paymentType}
                    changedPaymentType={changePaymentType}
                />

                <Text style={styles.title}>Delivery Data</Text>
                <DeliveryForm delivery={delivery} changedDelivery={changeDelivery} />
            </ScrollView>

            <PaymentResume
                quantityItems={quantityItems}
                totalValue={totalValue}
                fullValue={fullValue}
                installment={installment}
                endPurchase={endPurchase}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
