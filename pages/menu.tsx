import React from 'react'
import { ScrollView, useColorScheme } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { MenuCard } from '../components'

import type { RabbitHouseMenu } from '../types'

interface MenuScreenProps {
    title: string
    menu: RabbitHouseMenu[]
}

const MenuScreen = () => {
    const { params } = useRoute()
    const { title, menu } = params as MenuScreenProps

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        paddingTop: 8,
        backgroundColor: isDarkMode ? '#000' : '#efeff4',
        flex: 1
    }

    return (
        <ScrollView style={backgroundStyle}>
            <MenuCard title={title} menu={menu} />
        </ScrollView>
    )
}

export default MenuScreen
