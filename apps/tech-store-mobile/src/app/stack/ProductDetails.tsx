import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import ProductSpecification from '@/src/components/product/ProductSpecification'
import PurchaseBanner from '@/src/components/product/PurchaseBanner'
import Colors from '@/src/data/constants/Colors'
import PriceMeter from '@/src/components/product/PriceMeter'
import UserReview from '@/src/components/product/UserReview'

export default function ProductDetails(props: any) {
    const { product } = props.route.params
    if (!product) return null

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoProduct}>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.backgroundImage}>
                    <Image src={product.image} style={styles.image} />
                </View>
                <ProductSpecification product={product} />
            </View>
            <PurchaseBanner product={product} />
            <PriceMeter product={product} />
            <UserReview product={product} />
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: Colors.BG_PRIMARY,
    },
    infoProduct: {
        backgroundColor: Colors.BG_SECUNDARY,
        padding: 20,
        gap: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    backgroundImage: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        height: 230,
    },
    image: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },
})
