import { IMenuItem } from './header';


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



export const IconGroupHeaderItems = [
    {
        id: 'account',
    },
    {
        id: 'user-request',
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
