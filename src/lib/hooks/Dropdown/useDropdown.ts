/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 23.10.20 - 23:02
 **/
import * as React from 'react'
import { DropdownContext, DropdownContextInterface } from 'app/containers/Header/components/Dropdowns/DropdownContext';
import * as Dropdown from '../../../app/components/Dropdown/dropdown';

export interface UseDropdownProps {
    dropdownId: string
}

class ContextMissingError implements Error {
    constructor(context: string, origin: string) {
        this.message = `Context: ${context} is missing. The Provider component of that context must be a parent of the component that uses ${origin}`
        this.name = 'ContextMissingError'
    }

    message: string;
    name: string;
}

const useDropdown = (id: string) => {
    const { openDropdown, setOpenDropdown } = React.useContext<DropdownContextInterface>(DropdownContext)

    if (!setOpenDropdown && !openDropdown) {
        throw new ContextMissingError('DropdownContext', 'useDropdown.ts')
    }

    const onSwitchDropdown = () => setOpenDropdown(openDropdown !== id ? id : '')

    const hideDropdown = () => setOpenDropdown('')

    const isDropdownVisible = id === openDropdown

    return { isDropdownVisible, onSwitchDropdown, hideDropdown }
}

export default useDropdown
