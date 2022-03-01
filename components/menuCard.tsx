import React, { Fragment } from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'

import MenuItem from './menuItem'

import { RabbitHouseMenu } from '../types'

interface MenuCardProps {
    title: string
    menu: RabbitHouseMenu[]
}

const MenuCard = ({ title, menu }: MenuCardProps) => {
    const s = menuCardStyle(useColorScheme() === 'dark')

    return (
        <View style={s.wrap}>
            <Text style={s.title}>{title}</Text>
            <View style={s.card}>
                {menu.map((menu, index) => (
                    <Fragment key={menu.name.en}>
                        {index !== 0 && <View style={s.divider} />}
                        <MenuItem menu={menu} />
                    </Fragment>
                ))}
            </View>
        </View>
    )
}

export const menuCardStyle = (isDark: boolean) =>
    StyleSheet.create({
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: isDark ? '#555' : '#efeff4'
        },
        title: {
            textTransform: 'capitalize',
            color: isDark ? '#999' : '#777',
            marginBottom: 4,
            marginLeft: 8
        },
        wrap: {
            flexDirection: 'column',
            paddingVertical: 8,
            paddingHorizontal: 16
        },
        card: {
            flexDirection: 'column',
            backgroundColor: isDark ? '#333' : '#fff',
            borderRadius: 8
        }
    })

export default MenuCard
