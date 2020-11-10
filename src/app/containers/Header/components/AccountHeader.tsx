/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 17:24
 **/

import { Image } from 'semantic-ui-react';
import ProfilePic from '../../../../assets/images/ruda-made/profile-ruda.png';
import * as React from 'react';
import AccountDropdown from './Dropdowns/AccountDropdown/AccountDropdown';
import { AccountHeaderConfig } from '../config/header.config';
import { useDropdown } from 'lib/hooks';

export interface AccountHeaderProps {

}

const AccountHeader: React.FC<AccountHeaderProps> = (props: AccountHeaderProps) => {
    const dropdownId = AccountHeaderConfig.dropdown.id
    const { onSwitchDropdown } = useDropdown(dropdownId)

    return (
        <div className="account order-1 dropdown">
            <div className="account-link dropdown-toggle-no-caret" role="button"
               data-toggle="dropdown">
                <div className="user-dp"><Image src={ProfilePic} onClick={onSwitchDropdown}/></div>
            </div>
            <div className="dropdown-menu account-dropdown dropdown-menu-right show">
                <AccountDropdown />
            </div>
        </div>
    )
}

export default AccountHeader
