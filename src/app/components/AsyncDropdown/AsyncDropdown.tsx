/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 16:04
 **/

import * as React from 'react'
import Dropdown from '../Dropdown/Dropdown';
import { DropdownProps } from '../Dropdown/dropdown';

export interface AsyncDropdownProps extends DropdownProps{
    dataRoute: string // Probably route in Redux
}

/**
 * @description This dropdown is like the normal Dropdown.tsx but the data is missing. Instead of it, there is
 * a route to obtain the data. Route should be able to point to Redux or to some URL.
 *
 * @param props : AsyncDropdownProps
 * @constructor
 */
const AsyncDropdown: React.FC<AsyncDropdownProps> = (props: AsyncDropdownProps) => {
    const { id, renderItem, dataRoute } = props

    // TODO: Implement an async hook
    // const useAsyncData = (route) => ['some async hook to retrieve data']
    // let data = useAsyncData(dataRoute)

    // TODO: Remove this temporarly mock data.
    let data = [
        {
            name: 'Rudolf Cicko',
            route: '/user/rudolfcicko',
            imgSrc: 'https://cleananddelicious.com/wp-content/uploads/2016/03/Avocad0-CD.jpg'
        }
    ]

    return <Dropdown id={id} renderItem={renderItem} data={data}/>
}

export default AsyncDropdown
