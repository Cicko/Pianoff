/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 28.09.20 - 13:35
 **/
import * as React from 'react'
import { Input, Menu } from 'semantic-ui-react';
import { MenuItemProps } from 'semantic-ui-react/dist/commonjs/collections/Menu/MenuItem';
import { IMenuItem, MenuItems } from './HeaderMenuConfig'

export interface HeaderMenuProps {
    activeItem: string
    onMenuItemClick: (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void
}

const HeaderMenu: React.FC<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const { activeItem, onMenuItemClick } = props

    const buildMenuItem = (item: IMenuItem) =>
        <Menu.Item
            name={item.title}
            active={activeItem === 'home'}
            onClick={onMenuItemClick}
        />

    const LeftMenu = MenuItems.map(buildMenuItem)

    const RightMenu =
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={onMenuItemClick}
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