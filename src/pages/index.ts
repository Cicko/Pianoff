import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Discover from './components/Discover/Discover'
import Blog from './components/Blog/Blog'
import Settings from './components/Settings/Settings'
import { IRedirectableItem } from 'lib/@types'

/**
 * Pages are what is contained inside the Body container.
 * Optionally you can hide the Header and the footer.
 */

export interface IPage extends IRedirectableItem {
    title: string,
    Component: React.FC<any>
    hideFromHeader?: boolean // Don't show this element in the Header's menu
    active?: boolean         // Is the current page
}

/**
 * This array also defines the Header's menu items
 */
const pages: Array<IPage> = [
    {
        title: 'pages.home',
        route: '/home',
        Component: Home,
        hideFromHeader: true,
    },
    {
        title: 'pages.profile',
        route: '/profile',
        active: true,
        Component: Profile
    },
    {
        title: 'pages.discover',
        route: '/discover',
        Component: Discover
    },
    {
        title: 'pages.blog',
        route: '/blog',
        Component: Blog
    },
    {
        title: 'pages.settings',
        route: '/settings',
        Component: Settings
    }
]

export default pages

export {
    Home,
    Profile,
    Blog,
    Settings
}
