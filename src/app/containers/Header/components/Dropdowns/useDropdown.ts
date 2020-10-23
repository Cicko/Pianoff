/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 23.10.20 - 23:02
 **/
import * as React from 'react'
import { DropdownContext, DropdownContextInterface } from './DropdownContext';

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

const useDropdown = (props: UseDropdownProps) => {
    const { dropdown } = React.useContext<DropdownContextInterface>(DropdownContext)
    const { dropdownId } = props

    if (!dropdown) {
        throw new ContextMissingError('DropdownContext', 'useDropdown')
    }

    const onSwitchDropdown = () => dropdown.setOpenDropdown(dropdown.openDropdown !== dropdownId ? dropdownId : '')

    const isDropdownVisible = dropdownId === dropdown.openDropdown

    return { isDropdownVisible, onSwitchDropdown }
}

export default useDropdown
