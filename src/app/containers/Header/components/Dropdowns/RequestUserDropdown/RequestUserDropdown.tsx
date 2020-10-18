import * as React from 'react'
import * as classNames from 'classnames'
import { Dropdown } from 'pianoff'
import { TranslationManager } from '../../../../../../lib/services'



export interface RequestUserDropdownInterface {
    users: Array<Dropdown.RequestUserDropdownProps>
    visible: boolean
}

const RequestUserDropdown: React.FC<RequestUserDropdownInterface> = (props: RequestUserDropdownInterface) => {
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
}

export default RequestUserDropdown
