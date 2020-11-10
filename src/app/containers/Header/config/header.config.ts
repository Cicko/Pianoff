import { IMenuItem } from './header';
import { RequestUserDropdown } from '../components/Dropdowns';


/**
 * useDropdown
 *  - openDropdown = (id)
 *  - setOpenDropdown
 *
 * Dropdown component
 *  - visible
 *  - data
 *  - renderItem
 *  - id
 *
 *  Header component
 *      - Loads from Redux all data
 *      - Reads config (this file)
 *      - Explicitly displays sections
 *          - PagesHeader
 *          - Add New Content
 *          - Icons Group Header
 *          - Account Header
 *              - AccountDropdown
 *                  - renderItem
 *                  - Dropdown with (this config) (AccountHeaderConfig.dropdown)
 *
**/

export const UserRequestConfig = {
    dropdown: {
        id: 'user-request',
        async: true,
        dataRoute: '/user-requests', // OR redux route such 'async.dropdown.userRequest'
    },
}


export const IconsGroupHeaderItems = [
    {
        id: 'search',
        icon: 'fa-search',
    },
    {
        id: 'user-request',
        icon: 'fa-user-plus',
        dropdownConfig: UserRequestConfig.dropdown,
        DropdownComponent: RequestUserDropdown
    },
    {
        id: 'messages',
        icon: 'fa-envelope',
        dropdown: true,
    },
    {
        id: 'notifications',
        icon: 'fa-bell',
        dropdown: true,
    }
]

export const AccountHeaderConfig = {
    dropdown: {
        id: 'account',
        data : [
            {
                title: 'dropdown.account.profile',
                route: '/profile'
            },
            {
                title: 'dropdown.account.settings',
                route: '/settings'
            },
            {
                title: 'dropdown.account.logout',
                route: '/logout'
            }
        ]
    }
}
