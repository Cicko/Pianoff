import * as React from 'react'
import { useRouter } from '../../../lib/utils/hooks';
import { IMenuItem } from './components/HeaderMenuConfig';
import pages from '../../../pages';
import { IconsGroupHeader, AccountHeader, PagesHeader, LogoHeader } from './components';
import { DropdownContext, DropdownContextInterface } from './components/Dropdowns/DropdownContext'

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

    const dropdownStore = {
        dropdown: {
            openDropdown,
            setOpenDropdown
        }
    }

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            <LogoHeader/>
                            <PagesHeader pages={pages}/>
                            <DropdownContext.Provider value={dropdownStore}>
                                <IconsGroupHeader dropdownId="IconsGroup"/>
                                <AccountHeader  dropdownId="ProfilePic"/>
                            </DropdownContext.Provider>
                        </nav>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
