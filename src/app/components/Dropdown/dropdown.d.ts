/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 10:22
 **/

declare namespace Dropdown {

    interface DropdownProps {
        id: string
        data?: Array<any>
        renderItem?: (IDropdownData) => any
    }
}

export = Dropdown
export as namespace Dropdown
