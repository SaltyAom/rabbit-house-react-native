import React from 'react'
import {
    View,
    Text,
    ScrollView,
    useColorScheme,
    StyleSheet,
    SafeAreaView
} from 'react-native'

import LanguageSwitcher from '../components/languageSwitcher'

const SettingsPage = () => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#efeff4',
        flex: 1
    }

    const s = ss(useColorScheme() === 'dark')

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={s.body}>
                    <Text style={s.title}>Settings</Text>
                    <View style={s.card}>
                        <View style={s.row}>
                            <Text style={s.subTitle}>Language</Text>
                            <LanguageSwitcher />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const ss = (isDark: boolean) =>
    StyleSheet.create({
        body: {
            flex: 1,
            flexDirection: 'column',
            paddingVertical: 8,
            paddingHorizontal: 16
        },
        title: {
            fontSize: 36,
            fontWeight: '600',
            marginTop: 24,
            marginBottom: 8,
            color: isDark ? '#fff' : '#000'
        },
        card: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            backgroundColor: isDark ? '#333' : '#fff'
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        subTitle: {
            flex: 1,
            fontSize: 16,
            fontWeight: '500',
            color: isDark ? '#fff' : '#000'
        }
    })

export default SettingsPage
