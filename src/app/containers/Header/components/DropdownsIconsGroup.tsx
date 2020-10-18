/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.10.20 - 23:15
 **/
import * as React from 'react'
import { MouseEventHandler } from 'react';
import RequestUserDropdown from './Dropdowns/RequestUserDropdown/RequestUserDropdown';

export interface DropdownsIconsGroupProps {
    openDropdown: string
    onSwitchDropdown: (dropdownName: string) => MouseEventHandler
}

const DropdownsIconsGroup: React.FC<DropdownsIconsGroupProps> = (props: DropdownsIconsGroupProps) => {
    const { openDropdown, onSwitchDropdown } = props

    const isDropdownVisible = (name: string) => name === openDropdown

    return (
        <ul className="group-icons">
            <li>
                <a href="search_result.html" className="icon-set">
                    <i className="fas fa-search"></i>
                </a>
            </li>
            <li className="dropdown">
                <a className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false" onClick={onSwitchDropdown('UserRequest')}>
                    <i className="fas fa-user-plus"></i>
                    <RequestUserDropdown users={[{ name: 'pepe ', imgSrc: null, url: null }]} visible={isDropdownVisible('UserRequest')}/>
                </a>
            </li>
            <li className="dropdown">
                <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown">
                    <i className="fas fa-envelope"></i>
                </a>
            </li>
            <li className="dropdown">
                <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-bell"></i>
                </a>
            </li>
        </ul>
    )
}

export default DropdownsIconsGroup
