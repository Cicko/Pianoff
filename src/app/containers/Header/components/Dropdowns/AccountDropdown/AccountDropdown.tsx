/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 10:33
 **/
import * as React from 'react'
import Dropdown from 'app/components/Dropdown/Dropdown';
import { AccountHeaderConfig } from '../../../config/header.config';

const AccountDropdown: React.FC = () => {

    const renderAccountMenuItem = ({ title, route }) => (
        <a key={title} className="link-item" href={route}>{title}</a>
    )

    return <Dropdown {...AccountHeaderConfig.dropdown} renderItem={renderAccountMenuItem}/>
}

export default AccountDropdown
