import { PaymentType } from '@tstore/core'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export interface PaymentTypeSelectionProps {
    paymentType?: PaymentType
    changedPaymentType?: (value: PaymentType) => void
    className?: string
}

export default function PaymentTypeSelection(
    props: PaymentTypeSelectionProps,
) {
    function renderItem(label: string, paymentType: PaymentType) {
        const selected = props.paymentType === paymentType
        return (
            <Pressable
                key={paymentType}
                style={styles.optionContainer}
                onPress={() => props.changedPaymentType?.(paymentType)}
            >
                <View style={styles.optionSelector}>
                    {selected && <View style={styles.selection} />}
                </View>
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            {renderItem('PIX', PaymentType.PIX)}
            {renderItem('Ticket', PaymentType.TICKET)}
            {renderItem('Credit Card', PaymentType.CARD)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionSelector: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8247E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selection: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8247E5',
    },
    text: {
        fontSize: 16,
        color: '#FFF',
    },
})
