import React, { Suspense } from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { useLanguage } from '../stores'

import type { RabbitHouseMenu } from '../types'

interface MenuItemProps {
    menu: RabbitHouseMenu
}

const _MenuItem = ({
    menu: {
        name: { en, jp },
        price: { usd, jpy }
    }
}: MenuItemProps) => {
    const [language] = useLanguage()
    const s = ss(useColorScheme() === 'dark')

    const intl = {
        English: {
            name: en,
            sub: jp,
            price: `$${usd}`
        },
        Japanese: {
            name: jp,
            sub: en,
            price: `${jpy}円`
        }
    }[language]

    if (!intl) return <Text>A</Text>

    return (
        <View style={s.container}>
            <Text style={s.subTitle}>{intl.sub}</Text>
            <View style={s.row}>
                <Text style={s.title}>{intl.name}</Text>
                <Text style={s.price}>{intl.price}</Text>
            </View>
        </View>
    )
}

const MenuItem = (props: MenuItemProps) => (
    <Suspense fallback={null}>
        <_MenuItem {...props} />
    </Suspense>
)

export const ss = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flexDirection: 'column',
            paddingVertical: 12,
            paddingHorizontal: 16
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        subTitle: {
            color: isDark ? '#999' : '#8e8e93',
            fontSize: 11,
            fontWeight: '300',
            marginBottom: 4
        },
        title: {
            fontSize: 16,
            color:  isDark ? '#fff' : '#000'
        },
        price: {
            fontSize: 16,
            fontWeight: '300',
            color: isDark ? '#999' : '#ceced2'
        }
    })

export default MenuItem
