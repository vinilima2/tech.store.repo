import { DeliveryOrder } from '@tstore/core'
import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'

export interface DeliveryFormProps {
    delivery: Partial<DeliveryOrder>
    changedDelivery: (delivery: Partial<DeliveryOrder>) => void
    className?: string
}

export default function DeliveryForm(props: DeliveryFormProps) {
    const { delivery, changedDelivery } = props

    function changeAttribute(attribute: string) {
        return (value: any) => {
            changedDelivery({ ...delivery, [attribute]: value })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={delivery.name}
                onChangeText={changeAttribute('nome')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={delivery.email}
                onChangeText={changeAttribute('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Identification"
                value={delivery.identification}
                onChangeText={changeAttribute('identification')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={delivery.address}
                onChangeText={changeAttribute('address')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complement"
                value={delivery.complement}
                onChangeText={changeAttribute('complement')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="City"
                value={delivery.city}
                onChangeText={changeAttribute('city')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="State"
                value={delivery.state}
                onChangeText={changeAttribute('state')}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
