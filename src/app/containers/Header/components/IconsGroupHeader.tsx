/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.10.20 - 23:15
 **/
import * as React from 'react'
import RequestUserDropdown from './Dropdowns/RequestUserDropdown/RequestUserDropdown';

export interface IconsGrousHeaderProps {
    data?: {
        [dropdownId: string]: any
    }
}

const IconsGroupHeader: React.FC<IconsGrousHeaderProps> = (props: IconsGrousHeaderProps) => {

    return (
        <ul className="group-icons">
            <li>
                <div className="icon-set" role="button">
                    <i className="fas fa-search"/>
                </div>
            </li>
            <li className="dropdown">
                <div className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false" onClick={() => {}}>
                    <i className="fas fa-user-plus"/>
                    <RequestUserDropdown users={[{ name: 'pepe ', imgSrc: null, url: null }]} visible={false}/>
                </div>
            </li>
            <li className="dropdown">
                <div className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown">
                    <i className="fas fa-envelope"/>
                </div>
            </li>
            <li className="dropdown">
                <div className="icon-set dropdown-toggle-no-caret" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-bell"/>
                </div>
            </li>
        </ul>
    )
}

export default IconsGroupHeader
