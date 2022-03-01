import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import AsyncStorage from '@react-native-community/async-storage'

export const languages = ['English', 'Japanese']

export type Language = 'English' | 'Japanese'

const languageAtom = atomWithStorage<string>(
    'language',
    languages[0],
    // @ts-ignore
    AsyncStorage
)

export const useLanguage = () => {
    const v = useAtom(languageAtom)
    const [language, set] = v

    if (!language) set(languages[0])

    return v
}
