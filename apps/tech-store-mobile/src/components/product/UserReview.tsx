import { Product } from '@tstore/core'
import { View, Text } from 'react-native'
import Colors from '@/src/data/constants/Colors'
import RatingReview from '../shared/RatingReview'

export interface UserReviewProps {
    product: Product
}

export default function UserReview(props: UserReviewProps) {
    return (
        <View
            style={{
                padding: 30,
                gap: 10,
            }}
        >
            <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}
            >
                <Text>⭐</Text>
                <Text
                    style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
                >
                    User Reviews
                </Text>
            </View>
            <Text style={{ color: '#ddd', textAlign: 'justify' }}>
                The product is praised for its performance, sound quality and
                practicality. Customers highlight the good value for money, the
                quality of the built-in microphone and ease of installation.
                Some mention that the product is ideal for gaming and that the
                Performance is excellent, even without a dedicated graphics card.
                Others highlight the sound quality and comfort of the headphones.
                heard.
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            color: Colors.EMPHASIS_TEXT_PINK,
                            fontSize: 48,
                            fontWeight: 'bold',
                        }}
                    >
                        {props.product.rating.toFixed(1).replace('.', ',')}
                    </Text>
                    <RatingReview rate={props.product.rating} length={18} />
                    <Text>(25)</Text>
                </View>
                <View>
                    <Text>Excellent performance.</Text>
                    <Text>Dedicated graphic.</Text>
                </View>
            </View>
        </View>
    )
}
