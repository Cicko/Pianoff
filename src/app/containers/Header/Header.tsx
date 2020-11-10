import * as React from 'react'
import { useRouter } from 'lib/utils/hooks';
import pages from 'pages';
import { IconsGroupHeader, AccountHeader, PagesHeader, LogoHeader } from './components';
import { DropdownContext } from './components/Dropdowns/DropdownContext'
import { onItemClick, HeaderProps, IMenuItem } from './config/header';

const Header: React.FC<HeaderProps> = () => {
    const [openDropdown, setOpenDropdown] = React.useState('')
    const router = useRouter()

    const onItemClick: onItemClick = (item: IMenuItem) => (e: React.MouseEvent<HTMLElement, MouseEvent>) =>  {
        e.preventDefault()
        router.push(item.route)
    }

    const dropdownStore = {
        openDropdown,
        setOpenDropdown
    }

    const AddContentButton = <a href="add_new_event.html" className="add-event d-none d-lg-block">Add Content</a>

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            <LogoHeader/>
                            <PagesHeader pages={pages} onPageClick={onItemClick}/>
                            {AddContentButton}
                            <DropdownContext.Provider value={dropdownStore}>
                                <IconsGroupHeader />
                                <AccountHeader  />
                            </DropdownContext.Provider>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
