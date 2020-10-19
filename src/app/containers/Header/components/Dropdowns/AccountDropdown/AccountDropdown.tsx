/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 17:22
 **/
import * as React from 'react'
import * as classNames from 'classnames'
import { Dropdown } from 'pianoff'
import { TranslationManager } from '../../../../../../lib/services'



export interface ProfileDropdownProps {
    visible: boolean
}

const AccountDropdown: React.FC<ProfileDropdownProps> = (props: ProfileDropdownProps) => {
    const t = React.useContext(TranslationManager.Context) as Function
    const { visible } = props
    const dropdownClassNames = classNames(
        "dropdown-menu",
        "account-dropdown",
        "dropdown-menu-right",
        { "show": visible }
    )

    const accountMenuItems: Array<Dropdown.AccountMenuProps> = [
        {
            label: t('dropdown.account.profile'),
            route: '/profile'
        },
        {
            label: t('dropdown.account.settings'),
            route: '/settings'
        },
        {
            label: t('dropdown.account.logout'),
            route: '/logout'
        }
    ]

    const renderAccountMenuItem = ({ label, route }) => (
        <a key={label} className="link-item" href={route}>{label}</a>
    )


    return (
        <div className={dropdownClassNames}>
            {accountMenuItems.map(renderAccountMenuItem)}
        </div>
    )
}

export default AccountDropdown
