import * as React from 'react'
import { Image } from 'semantic-ui-react'
import { useRouter } from '../../../lib/utils/hooks';
import { IMenuItem } from './components/HeaderMenuConfig';
import LogoImg from '../../../assets/images/ruda-made/logo.png';
import ProfilePic from '../../../assets/images/ruda-made/profile-ruda.png';
import { TranslationManager } from '../../../lib/services';
import pages from '../../../pages';
import RequestUserDropdown from './components/Dropdowns/RequestUserDropdown/RequestUserDropdown';
import DropdownsIconsGroup from './components/DropdownsIconsGroup';

export interface HeaderProps {
    activeItem: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const [openDropdown, setOpenDropdown] = React.useState('')
    const t = React.useContext(TranslationManager.Context) as Function
    // const activeItem = props.activeItem || 'home' // TODO: activeItem modification should modify redux store so the body adapts.
    const router = useRouter()

    const onMenuItemClick = (item: IMenuItem) => () =>  {
        router.push(item.route)
    }

    const onSwitchDropdown = (name: string) => () => {
            setOpenDropdown(openDropdown !== name ? name : '')
    }


    const LogoComponent = (
        <a className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" href="index.html">
            <Image src={LogoImg} height={50}/>
        </a>
    )

    const HeaderPagesComponent = (
        <div
            className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
            id="navbarSupportedContent">
            <ul className="navbar-nav align-self-stretch" style={{ maxHeight: 799 }}>
                {pages.filter(page => !page.hideFromHeader).map(page => (
                    <li className={`nav-item ${page.active ? 'active' : ''}`} >
                        <a className="nav-link" href={page.route}>{t(page.title)}</a>
                    </li>
                ))}
            </ul>
            <a href="add_new_event.html" className="add-event">Add Content</a>
        </div>
    )

    return (
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            {LogoComponent}
                            {HeaderPagesComponent}
                            <DropdownsIconsGroup onSwitchDropdown={onSwitchDropdown} openDropdown={openDropdown} />
                            <div className="account order-1 dropdown">
                                <a href="#" className="account-link dropdown-toggle-no-caret" role="button"
                                   data-toggle="dropdown">
                                    <div className="user-dp"><Image src={ProfilePic} /></div>
                                </a>
                            </div>
                        </nav>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
