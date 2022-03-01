import React from 'react'
import { StatusBar, useColorScheme, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
    Home as HomeIcon,
    Settings as SettingsIcon
} from 'react-native-feather'

import { LandingPage, MenuPage, SettingsPage } from './pages'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const backgroundColor = isDarkMode ? '#000' : '#efeff4'
    const color = isDarkMode ? '#ceced2' : '#333'

    return (
        <>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarStyle: {
                            backgroundColor
                        },
                        tabBarLabelStyle: {
                            color
                        },
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            switch (route.name) {
                                case 'Home':
                                    return (
                                        <HomeIcon
                                            color={color}
                                            strokeWidth={1}
                                        />
                                    )

                                case 'Settings':
                                    return (
                                        <SettingsIcon
                                            color={color}
                                            strokeWidth={1}
                                        />
                                    )

                                default:
                                    return null
                            }
                        },
                        tabBarInactiveTintColor: 'gray'
                    })}
                >
                    <Tab.Screen name="Home" component={HomeStackNavigator} />
                    <Tab.Screen name="Settings" component={SettingsPage} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

const HomeStackNavigator = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const backgroundColor = isDarkMode ? '#000' : '#efeff4'
    const color = isDarkMode ? '#fff' : '#000'

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor
                },
                headerTitleStyle: {
                    color
                }
            }}
        >
            <Stack.Screen name="Landing" component={LandingPage} />
            <Stack.Screen name="Menu" component={MenuPage} />
        </Stack.Navigator>
    )
}

export default App
