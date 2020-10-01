import * as React from 'react'
import { Container } from 'semantic-ui-react'
import HeaderMenu from './components/HeaderMenu';
import { useRouter } from '../../../lib/utils/hooks';
import { IMenuItem } from './components/HeaderMenuConfig';

export interface HeaderProps {
    activeItem: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const activeItem = props.activeItem || 'home' // TODO: activeItem modification should modify redux store so the body adapts.
    const router = useRouter()

    const onMenuItemClick = (item: IMenuItem) => () =>  {
        router.push(item.route)
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
