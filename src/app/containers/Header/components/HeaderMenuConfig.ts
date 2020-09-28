/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 28.09.20 - 13:07
 **/

/**
 *  IDEAS
 *   - Competitions
 *   - Discover
 */

export interface IMenuItem {
    title: string,
    route: string
}

export const MenuItems: Array<IMenuItem> = [
    {
        title: 'header.menuItem.home',
        route: '/'
    },
    {
        title: 'header.menuItem.blog',
        route: '/blog'
    },
    {
        title: 'header.menuItem.discover',
        route: '/discover'
    }
]
