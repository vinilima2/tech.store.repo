import { Ionicons } from '@expo/vector-icons'
import { Currency, Installment } from '@tstore/core'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '@/src/data/constants/Colors'

export interface PaymentResumeProps {
    quantityItems: number
    totalValue: number
    fullValue: number
    installment: Installment
    endPurchase: () => void
    className?: string
}

export default function PaymentResume(props: PaymentResumeProps) {
    return (
        <View style={styles.container}>
            <View style={styles.itemsValue}>
                <Text style={{ color: 'white' }}>Total Value ({props.quantityItems} items): </Text>
                <Text style={styles.itemsValueHighlight}>{Currency.format(props.totalValue)}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => props.endPurchase?.()}>
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>End Purchase</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#241440',
        borderRadius: 10,
        gap: 10,
    },
    itemsValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemsValueHighlight: {
        color: '#34d399',
        fontWeight: 'bold',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 45,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
