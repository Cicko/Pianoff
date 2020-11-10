/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 10:33
 **/
import * as React from 'react'
import Dropdown from 'app/components/Dropdown/Dropdown';
import { AccountHeaderConfig } from '../../../config/header.config';
import { useTranslation } from '../../../../../../lib/hooks';

const AccountDropdown: React.FC = () => {
    const t = useTranslation()

    const renderAccountMenuItem = ({ title, route }) => (
        <a key={title} className="link-item" href={route}>{t(title)}</a>
    )

    return <Dropdown {...AccountHeaderConfig.dropdown} renderItem={renderAccountMenuItem}/>
}

export default AccountDropdown
