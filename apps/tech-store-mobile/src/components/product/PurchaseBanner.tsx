import { Ionicons } from '@expo/vector-icons'
import { Currency, Product } from '@tstore/core'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '@/src/data/constants/Colors'
import useCart from '../../data/hooks/useCart'
import useInstallment from '../../data/hooks/useInstallment'

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const { product } = props
    const { addItem } = useCart()
    const installment = useInstallment(product.promotionalPrice)

    return (
        <View style={styles.container}>
            <View style={styles.containerPreco}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        borderRightWidth: 3,
                        borderRightColor: Colors.PRIMARY,
                    }}
                >
                    <Text style={styles.fullValue}>
                        from R$ {product?.basePrice}
                    </Text>
                    <View style={styles.promotionalPrice}>
                        <Text style={styles.value}>por</Text>
                        <Text style={styles.emphasisValue}>
                            {Currency.format(product?.promotionalPrice)}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.value}>
                        in until {installment.installmentQuantity}x from
                    </Text>
                    <Text style={styles.value}>
                        {Currency.format(installment.installmentValue)}
                    </Text>
                </View>
            </View>
            <View style={{ gap: 10 }}>
                <Pressable
                    onPress={() => addItem(product)}
                    style={{ ...styles.button, backgroundColor: Colors.PRIMARY }}
                >
                    <Ionicons
                        style={styles.textButton}
                        name="cart-outline"
                        size={20}
                    />
                    <Text style={styles.textButton}>Add</Text>
                </Pressable>
                <Pressable
                    onPress={() => {}}
                    style={{
                        ...styles.button,
                        backgroundColor: Colors.SECUNDARY,
                    }}
                >
                    <Ionicons
                        style={styles.textButton}
                        name="card-outline"
                        size={20}
                    />
                    <Text style={styles.textButton}>Buy</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 30,
    },
    containerPreco: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fullValue: {
        textDecorationLine: 'line-through',
        color: '#C4C4C4',
    },
    promotionalPrice: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
    },
    value: {
        fontSize: 16,
        color: 'white',
    },
    emphasisValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.EMPHASIS_TEXT_GREEN,
    },
    button: {
        color: '#FFF',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 9999,
        height: 35,
        paddingHorizontal: 80,
        gap: 8,
    },
    textButton: {
        color: '#FFF',
    },
})
