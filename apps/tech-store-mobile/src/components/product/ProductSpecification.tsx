import { Product } from '@tstore/core'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../data/constants/Colors'

export interface ProductSpecificationProps {
    product: Product
}

export default function ProductSpecification(props: ProductSpecificationProps) {
    const { product } = props
    return (
        <View style={styles.container}>
            {product?.specifications &&
                Object.keys(product?.specifications!)
                    .filter((k) => k !== 'emphasis')
                    .map((key) => (
                        <View key={key} style={styles.specification}>
                            <Text style={styles.name}>{key}</Text>
                            <Text style={styles.value}>
                                {product?.specifications[key]}
                            </Text>
                        </View>
                    ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    specification: {
        flexDirection: 'row',
        gap: 10,
    },
    name: {
        color: 'white',
        width: '35%',
        backgroundColor: Colors.PRIMARY,
        padding: 8,
        borderRadius: 6,
    },
    value: {
        flex: 1,
        color: 'white',
        backgroundColor: Colors.PRIMARY,
        padding: 8,
        borderRadius: 6,
    },
})
