/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 17:59
 **/

import * as React from 'react'
import { TranslationManager } from '../services';

const useTranslation = () => {
    return React.useContext(TranslationManager.Context) as Function
}

export default useTranslation
