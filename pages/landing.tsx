import React, { Fragment, useEffect, useState } from 'react'
import type { FC } from 'react'
import {
    Text,
    ScrollView,
    useColorScheme,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { useLinkProps } from '@react-navigation/native'
import { ChevronRight } from 'react-native-feather'

import { MenuCard, menuCardStyle as createMenuCardStyle } from '../components'

import type { RabbitHouse, RabbitHouseMenu } from '../types'

interface NavigateProps {
    title: string
    menu: RabbitHouseMenu[]
}

const Navigate: FC<NavigateProps> = ({ children, title, menu }) => {
    const { onPress } = useLinkProps({
        to: {
            screen: 'Menu',
            params: {
                title,
                menu
            }
        }
    })

    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
}

const HomePage = () => {
    const [rabbitHouse, setRabbitHouse] = useState<RabbitHouse | null>(null)
    const [success, setSuccess] = useState<boolean | null>(null)

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#efeff4',
        flex: 1
    }

    const getRabbitHouse = async () => {
        try {
            const rabbitHouseData = await fetch(
                'https://rabbit-house.saltyaom.com'
            ).then((r) => r.json())

            setRabbitHouse(rabbitHouseData)
            setSuccess(true)
        } catch (err) {
            setSuccess(false)
        }
    }

    useEffect(() => {
        getRabbitHouse()
    }, [])

    if (success === null) {
        return (
            <View style={backgroundStyle}>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (!success) {
        return (
            <View style={backgroundStyle}>
                <Text>Failed</Text>
            </View>
        )
    }

    const menuCardStyle = createMenuCardStyle(isDarkMode)
    const s = ss(isDarkMode)

    return (
        <ScrollView style={backgroundStyle}>
            <Text style={s.title}>Rabbit House</Text>
            <View style={menuCardStyle.wrap}>
                <Text style={menuCardStyle.title}>Table of Content</Text>
                <View style={menuCardStyle.card}>
                    {Object.entries(rabbitHouse!).map(([type, menu], index) => (
                        <Fragment key={type}>
                            {index !== 0 && (
                                <View style={menuCardStyle.divider} />
                            )}
                            <Navigate title={type} menu={menu}>
                                <View style={s.menu}>
                                    <Text style={s.menuTitle}>{type}</Text>
                                    <ChevronRight
                                        strokeWidth={1}
                                        color={isDarkMode ? '#999' : '#8e8e93'}
                                    />
                                </View>
                            </Navigate>
                        </Fragment>
                    ))}
                </View>
            </View>

            {Object.entries(rabbitHouse!).map(([type, menus]) => (
                <MenuCard key={type} title={type} menu={menus} />
            ))}
        </ScrollView>
    )
}

const ss = (isDark: boolean) =>
    StyleSheet.create({
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: isDark ? '#777' : '#efeff4'
        },
        menu: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16
        },
        menuTitle: {
            fontSize: 16,
            color: isDark ? '#fff' : '#000',
            textTransform: 'capitalize'
        },
        title: {
            fontSize: 36,
            fontWeight: '600',
            marginTop: 24,
            marginLeft: 16,
            marginBottom: 8,
            color: isDark ? '#fff' : '#000'
        }
    })

export default HomePage
