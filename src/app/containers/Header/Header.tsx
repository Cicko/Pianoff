import * as React from 'react'
import { Container, Input, Menu } from 'semantic-ui-react'
import { MenuItemProps } from 'semantic-ui-react/dist/commonjs/collections/Menu/MenuItem';
import HeaderMenu from './components/HeaderMenu';
import { act } from 'react-dom/test-utils';

export interface HeaderProps {
    activeItem: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const activeItem = props.activeItem || 'home' // TODO: activeItem modification should modify redux store so the body adapts.

    const onMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void {

    }

    return (
        <Container>
            <HeaderMenu
                activeItem={activeItem}
                onMenuItemClick={onMenuItemClick}
            />
        </Container>
    )
}

export default Header
