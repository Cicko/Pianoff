import * as React from 'react'
import { Container, Image } from 'semantic-ui-react'
import HeaderMenu from './components/HeaderMenu';
import { useRouter } from '../../../lib/utils/hooks';
import { IMenuItem } from './components/HeaderMenuConfig';
import LogoImg from '../../../assets/images/ruda-made/logo.png';
import ProfilePic from '../../../assets/images/ruda-made/profile-ruda.png';

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
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            <a className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" href="index.html">
                                <Image src={LogoImg} height={50}/>
                            </a>
                            <button className="navbar-toggler align-self-start" type="button">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div
                                className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav align-self-stretch" style={{ maxHeight: 799 }}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home <span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="discussions.html">Discussion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="our_blog.html">Blog</a>
                                    </li>
                                </ul>
                                <a href="add_new_event.html" className="add-event">Add New Event</a>
                            </div>
                            <ul className="group-icons">
                                <li><a href="search_result.html" className="icon-set"><i className="fas fa-search"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                                       data-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user-plus"></i>
                                    </a>
                                    <div className="dropdown-menu user-request-dropdown dropdown-menu-right">
                                        <div className="user-request-list">
                                            <div className="request-users">
                                                <div className="user-request-dt">
                                                    <a href="#"><img src="../../assets/images/user-dp-1.jpg" alt=""/></a>
                                                    <a href="#" className="user-title">Jassica William</a>
                                                </div>
                                                <button className="accept-btn">Accept</button>
                                            </div>
                                        </div>
                                        <div className="user-request-list">
                                            <div className="request-users">
                                                <div className="user-request-dt">
                                                    <a href="#"><img src="images/user-dp-1.jpg" alt=""/></a>
                                                    <a href="#" className="user-title">Rock Smith</a>
                                                </div>
                                                <button className="accept-btn">Accept</button>
                                            </div>
                                        </div>
                                        <div className="user-request-list">
                                            <div className="request-users">
                                                <div className="user-request-dt">
                                                    <a href="#"><img src="images/user-dp-1.jpg" alt=""/></a>
                                                    <a href="#" className="user-title">Joy Doe</a>
                                                </div>
                                                <button className="accept-btn">Accept</button>
                                            </div>
                                        </div>
                                        <div className="user-request-list">
                                            <a href="my_dashboard_all_requests.html" className="view-all">View All
                                                Friend Requests</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                                       data-toggle="dropdown">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="icon-set dropdown-toggle-no-caret" role="button"
                                       data-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-bell"></i>
                                    </a>

                                </li>
                            </ul>
                            <div className="account order-1 dropdown">
                                <a href="#" className="account-link dropdown-toggle-no-caret" role="button"
                                   data-toggle="dropdown">
                                    <div className="user-dp"><Image src={ProfilePic} /></div>
                                    <span>Hi! Rudolf</span>
                                    <i className="fas fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu account-dropdown dropdown-menu-right">
                                    <a className="link-item" href="my_dashboard_activity.html">Profile</a>
                                    <a className="link-item" href="my_dashboard_messages.html">Messages</a>
                                    <a className="link-item" href="my_dashboard_booked_events.html">Booked Events</a>
                                    <a className="link-item" href="my_dashboard_credits.html">Credit <span
                                        className="right-cm">$100</span></a>
                                    <a className="link-item" href="invite.html">Invite</a>
                                    <a className="link-item" href="my_dashboard_setting_info.html">Setting</a>
                                    <a className="link-item" href="login.html">Logout</a>
                                </div>
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
