import * as React from 'react'
import { AsyncDropdown, Dropdown } from 'app/components'
import { useTranslation } from '../../../../../../lib/hooks';
import { UserRequestConfig } from '../../../config/header.config';

export interface RequestUserDropdownInterface {

}

const RequestUserDropdown: React.FC<RequestUserDropdownInterface> = (props: RequestUserDropdownInterface) => {
    const t = useTranslation()

    const renderUserRequest = ({ name, imgSrc, route}) => (
        <div className="request-users" >
            <div className="user-request-dt">
                <a href={route}><img src={imgSrc} alt=""/></a>
                <a href="#" className="user-title">{name}</a>
            </div>
            <button className="accept-btn">{t('button.Accept')}</button>
        </div>
    )

    return <AsyncDropdown {...UserRequestConfig.dropdown} renderItem={renderUserRequest}/>

    /*
    const t = React.useContext(TranslationManager.Context) as Function
    const { users, visible } = props
    const dropdownClassNames = classNames(
        "dropdown-menu",
        "user-request-dropdown",
        "dropdown-menu-right",
        { "show": visible }
    )

    const renderUserRequest = ({name, imgSrc, url}) => (
        <div className="request-users">
            <div className="user-request-dt">
                <a href={url}><img src={imgSrc} alt=""/></a>
                <a href="#" className="user-title">{name}</a>
            </div>
            <button className="accept-btn">{t('button.Accept')}</button>
        </div>
    )

    const ViewAllFriendsButton = (
        <div className="user-request-list" key="user-all-requests">
            <a href="my_dashboard_all_requests.html" className="view-all">
                {t('dropdown.requestUser.button.viewAll')}
            </a>
        </div>
    )

    return (
        <div className={dropdownClassNames}>
            {users.map(renderUserRequest)}
            {ViewAllFriendsButton}
        </div>
    )

     */
}

export default RequestUserDropdown
