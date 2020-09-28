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
        title: 'pages.home',
        route: '/'
    },
    {
        title: 'pages.blog',
        route: '/blog'
    },
    {
        title: 'pages.discover',
        route: '/discover'
    }
]
