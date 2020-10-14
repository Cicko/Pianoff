/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 28.09.20 - 13:35
 **/
import * as React from 'react'
import { Input, Menu, Image } from 'semantic-ui-react';
import AvatarEditor from 'react-avatar-editor'
import { MenuItemProps } from 'semantic-ui-react/dist/commonjs/collections/Menu/MenuItem';
import { IMenuItem } from './HeaderMenuConfig'
import pages from '../../../../pages'
import TranslationManager from '../../../../lib/services/TranslationManager/TranslationManager';
import LogoImg from '../../../../assets/images/ruda-made/logo.png'
import ProfilePic from '../../../../assets/images/ruda-made/profile-ruda.png'

export interface HeaderMenuProps {
    activeItem: string
    onMenuItemClick: (item: IMenuItem) => (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void
}

const HeaderMenu: React.FC<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const { activeItem, onMenuItemClick } = props
    const t = React.useContext(TranslationManager.Context) as Function

    const buildMenuItem = (item: IMenuItem) =>
        <Menu.Item
            name={t(item.title)}
            active={activeItem === 'home'}
            onClick={onMenuItemClick(item)}
        />

    const LeftMenu = pages
        .filter(page => !page.hideFromHeader)
        .map(buildMenuItem)

    const RightMenu =
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
                name={t('common.logout')}
                active={activeItem === 'logout'}
                onClick={onMenuItemClick({ route: '/logout' })}
            />
        </Menu.Menu>

    return (
        <Menu secondary>
            {LeftMenu}
            {RightMenu}
        </Menu>
    )
}

export default HeaderMenu
