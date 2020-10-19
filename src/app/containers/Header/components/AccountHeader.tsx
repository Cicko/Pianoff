/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 17:24
 **/

import { Image } from 'semantic-ui-react';
import ProfilePic from '../../../../assets/images/ruda-made/profile-ruda.png';
import * as React from 'react';
import { MouseEventHandler } from 'react';
import { AccountDropdown } from './Dropdowns';

export interface AccountHeaderProps {
    openDropdown: string
    onSwitchDropdown: (dropdownName: string) => MouseEventHandler
    dropdownId: string
}

const AccountHeader: React.FC<AccountHeaderProps> = (props: AccountHeaderProps) => {
    const { openDropdown, onSwitchDropdown, dropdownId } = props

    const isDropdownVisible = (name: string) => name === openDropdown

    return (
        <div className="account order-1 dropdown">
            <a href="#" className="account-link dropdown-toggle-no-caret" role="button"
               data-toggle="dropdown">
                <div className="user-dp"><Image src={ProfilePic} onClick={onSwitchDropdown(dropdownId)}/></div>
            </a>
            <div className="dropdown-menu account-dropdown dropdown-menu-right show">
                <AccountDropdown visible={isDropdownVisible(dropdownId)}/>
            </div>
        </div>
    )
}

export default AccountHeader
