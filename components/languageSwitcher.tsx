import React, { Suspense } from 'react'
import { useColorScheme } from 'react-native'

import { Dropdown } from 'react-native-element-dropdown'

import { languages, useLanguage } from '../stores'

const _LanguageSwitcher = () => {
    const [language, setLanguage] = useLanguage()

    const isDark = useColorScheme() === 'dark'

    return (
        <Dropdown
            style={{
                width: 108,
                borderColor: isDark ? 'red' : '#ceced2'
            }}
            selectedTextStyle={{
                color: isDark ? '#fff' : '#000'
            }}
            maxHeight={116}
            containerStyle={{
                backgroundColor: isDark ? '#555' : '#fff'
            }}
            activeColor={isDark ? '#333' : '#f5f5f5'}
            inputSearchStyle={{
                backgroundColor: 'blue'
            }}
            labelField="value"
            valueField="value"
            value={language}
            onChange={({ value }) => {
                setLanguage(value)
            }}
            data={languages.map((value) => ({
                value
            }))}
        />
    )
}

export const LanguageSwitcher = () => (
    <Suspense fallback={null}>
        <_LanguageSwitcher />
    </Suspense>
)

export default LanguageSwitcher
