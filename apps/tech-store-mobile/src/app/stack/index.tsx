import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { CartProvider } from '@/src/data/contexts/ContextCart'
import { PaymentProvider } from '@/src/data/contexts/PaymentContext'
import { ProductsProvider } from '@/src/data/contexts/ProductsContext'
import Payment from './Payment'
import ProductDetails from './ProductDetails'
import Tabs from '../tabs'
import LastPurchases from './LastPurchases'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <ProductsProvider>
            <CartProvider>
                <PaymentProvider>
                    <NavigationContainer theme={DarkTheme}>
                        <Stack.Navigator initialRouteName="Tabs">
                            <Stack.Screen
                                name="Tabs"
                                component={Tabs}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="ProductDetails"
                                component={ProductDetails}
                                options={{
                                    title: 'Product Details',
                                    headerBackTitle: 'Back',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="Payment"
                                component={Payment}
                                options={{
                                    title: 'Payment Details',
                                    headerBackTitle: 'Back',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="LastPurchases"
                                component={LastPurchases}
                                options={{
                                    title: 'Last Purchases',
                                    headerBackTitle: 'Back',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaymentProvider>
            </CartProvider>
        </ProductsProvider>
    )
}
