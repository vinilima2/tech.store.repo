import {Fontisto, Ionicons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import {Product} from '@tstore/core'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '@/src/data/constants/Colors'

export interface MedidorDePrecoProps {
    product: Product
}

export default function PriceMeter(props: MedidorDePrecoProps) {
    const {
        lowestPrice,
        highestPrice,
        promotionalPrice,
        averagePrice
    } = props.product

    let percentage
    if (promotionalPrice > averagePrice) {
        percentage = ((promotionalPrice - averagePrice) / (highestPrice - averagePrice)) * 50 + 50
    } else {
        percentage = (1 - (averagePrice - promotionalPrice) / (averagePrice - lowestPrice)) * 50
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusPrice}>
                {percentage >= 40 && percentage < 60 ? (
                    <Fontisto
                        name="confused"
                        size={40}
                        style={{color: '#eab308'}}
                    />
                ) : percentage >= 60 ? (
                    <Fontisto
                        name="mad"
                        size={40}
                        style={{color: '#ef4444'}}
                    />
                ) : (
                    <Fontisto
                        name="smiley"
                        size={40}
                        style={{color: '#22c55e'}}
                    />
                )}
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white'}}>
                            The product price is{' '}
                        </Text>
                        <Text
                            style={{
                                color: Colors.EMPHASIS_TEXT_GREEN,
                                fontWeight: 'bold',
                            }}
                        >
                            {percentage >= 40 && percentage < 60
                                ? 'on average'
                                : percentage >= 60
                                    ? 'above average'
                                    : 'below average'}
                        </Text>
                    </View>
                    <Text style={{color: 'white'}}>
                        Based on the price of the last 30 days.
                    </Text>
                </View>
            </View>
            <View style={{position: 'relative'}}>
                <LinearGradient
                    colors={['#22c55e', '#facc15', '#ef4444']}
                    start={{x: 0, y: 0.75}}
                    end={{x: 1, y: 0.25}}
                    style={styles.priceBar}
                ></LinearGradient>
                <View
                    style={{...styles.positionPrice, left: `${percentage}%`}}
                >
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        style={{color: Colors.EMPHASIS_TEXT_GREEN}}
                    />
                    <View style={styles.externalCirclePrice}>
                        <View style={styles.internalCirclePrice}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    statusPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    priceBar: {
        position: 'relative',
        height: 7,
        borderRadius: 9999,
    },
    positionPrice: {
        position: 'absolute',
        alignItems: 'center',
        top: -25,
    },
    externalCirclePrice: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 18,
        width: 18,
        borderRadius: 9999,
    },
    internalCirclePrice: {
        backgroundColor: Colors.EMPHASIS_TEXT_GREEN,
        height: 13,
        width: 13,
        borderRadius: 9999,
    },
})
