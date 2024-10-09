import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Initial from './Initial'
import Cart from './Cart'
import User from './User'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    function tab(name: string, component: any, label: string, icon: string) {
        return (
            <Tab.Screen
                name={name}
                component={component}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabScreen}>
                            <Ionicons
                                name={icon as any}
                                size={22}
                                color={focused ? '#FFF' : '#CCC'}
                            />
                            <Text
                                style={{
                                    ...styles.tabScreenText,
                                    color: focused ? '#FFF' : '#CCC',
                                }}
                            >
                                {label}
                            </Text>
                        </View>
                    ),
                }}
            />
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Initial"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#7811F5',
                tabBarInactiveBackgroundColor: '#7811F5',
                tabBarStyle: {
                    backgroundColor: '#7811F5',
                },
            }}
        >
            {tab('Initial', Initial, 'Initial', 'home-outline')}
            {tab('Cart', Cart, 'Cart', 'cart-outline')}
            {tab('User', User, 'User', 'person-outline')}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabScreen: {
        alignItems: 'center',
    },
    tabScreenText: {
        fontSize: 14,
    },
})
