/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.10.20 - 23:15
 **/
import * as React from 'react'
import * as classNames from 'classnames'
import { IconsGroupHeaderItems } from '../../config/header.config';
import { useContext } from 'react';
import { DropdownContext } from '../Dropdowns/DropdownContext';

export interface IconsGrousHeaderProps {
    data?: {
        [dropdownId: string]: any
    }
}

const IconsGroupHeader: React.FC<IconsGrousHeaderProps> = (props: IconsGrousHeaderProps) => {
    const { setOpenDropdown } = useContext(DropdownContext)

    const renderIconGroupHeaderItem = (item) => {
        const classes = classNames({ "dropdown": item.dropdown })

        return (
            <li className={classes} key={item.id}>
                <div
                    className={classNames('icon-set', classes)}
                    role="button"
                    onClick={() => setOpenDropdown(item.id)}
                >
                    <i className={`fas ${item.icon}`}/>
                    {item.DropdownComponent && <item.DropdownComponent />}
                </div>
            </li>
        )
    }

    return (
        <ul className="group-icons">
            {IconsGroupHeaderItems.map(renderIconGroupHeaderItem)}
        </ul>
    )

    /*
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

     */
}

export default IconsGroupHeader
