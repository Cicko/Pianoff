/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 28.09.20 - 14:03
 **/
import { get } from 'lodash'
import * as React from 'react'

interface ITranslationManager {
    t: (lang: string) => (key: string) => string
    Context: React.Context<object>
}

const TranslationManager: ITranslationManager = {
    t: (lang: string = 'en-KZ') => (key: string, replacements?: object) => {
        const translation = require(`../../../assets/translations/${lang ||
        'english'}.json`)
        if (!replacements) return get(translation, key, key)
        else {
            let result = get(translation, key, key)
            for (key as string in replacements) {
                const regex = new RegExp(`{+\\s*${key}\\s*}+`)
                result = result.replace(regex, replacements[key])
            }
            return result
        }
    },
    Context: React.createContext({}),
}

export default TranslationManager
