/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 10:22
 **/

declare namespace Dropdown {

    interface DropdownProps {
        id: string
        visible?: boolean
        data?: Array<IDropdownData>
        renderItem?: (IDropdownData) => any
    }

    interface IDropdownData {
        route: string
        title: string
    }
}

export = Dropdown
export as namespace Dropdown
