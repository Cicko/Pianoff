/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.10.20 - 23:15
 **/
import * as React from 'react'
import RequestUserDropdown from './Dropdowns/RequestUserDropdown/RequestUserDropdown';
import useDropdown from './Dropdowns/useDropdown';

export interface DropdownsIconsGroupProps {
    dropdownId: string
}

const IconsGroupHeader: React.FC<DropdownsIconsGroupProps> = (props: DropdownsIconsGroupProps) => {
    const { onSwitchDropdown, isDropdownVisible } = useDropdown(props)

    return (
        <ul className="group-icons">
            <li>
                <a href="search_result.html" className="icon-set">
                    <i className="fas fa-search"/>
                </a>
            </li>
            <li className="dropdown">
                <a className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false" onClick={onSwitchDropdown}>
                    <i className="fas fa-user-plus"/>
                    <RequestUserDropdown users={[{ name: 'pepe ', imgSrc: null, url: null }]} visible={isDropdownVisible}/>
                </a>
            </li>
            <li className="dropdown">
                <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown">
                    <i className="fas fa-envelope"/>
                </a>
            </li>
            <li className="dropdown">
                <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-bell"/>
                </a>
            </li>
        </ul>
    )
}

export default IconsGroupHeader
