import * as React from 'react'
import { Image } from 'semantic-ui-react'
import { useRouter } from '../../../lib/utils/hooks';
import { IMenuItem } from './components/HeaderMenuConfig';
import LogoImg from '../../../assets/images/ruda-made/logo.png';
import pages from '../../../pages';
import { IconsGroupHeader, AccountHeader, PagesHeader, LogoHeader } from './components';
import { useTranslation } from '../../../lib/hooks';

export interface HeaderProps {
    activeItem: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const [openDropdown, setOpenDropdown] = React.useState('')
    // const activeItem = props.activeItem || 'home' // TODO: activeItem modification should modify redux store so the body adapts.
    const router = useRouter()

    const onMenuItemClick = (item: IMenuItem) => () =>  {
        router.push(item.route)
    }

    const onSwitchDropdown = (name: string) => () => {
            setOpenDropdown(openDropdown !== name ? name : '')
    }

    return (
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            <LogoHeader/>
                            <PagesHeader pages={pages}/>
                            <IconsGroupHeader onSwitchDropdown={onSwitchDropdown} openDropdown={openDropdown} dropdownId="IconsGroup"/>
                            <AccountHeader onSwitchDropdown={onSwitchDropdown} openDropdown={openDropdown} dropdownId="ProfilePic"/>
                        </nav>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
