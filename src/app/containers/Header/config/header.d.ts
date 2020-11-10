import * as React from 'react'
import { IRedirectableItem } from 'lib/@types';
import { IPage } from 'pages';


declare namespace Header {

    // Header props
    interface HeaderProps {
        activeItem: string
    }

    /**
     * Header components props
     */
    interface PagesHeaderProps {
        pages: Array<IPage>
        onPageClick: onItemClick
    }


    /**
     * Components
     */
    interface IMenuItem extends IRedirectableItem {
        title?: string,
    }


    /**
     * Events
     */
    type onItemClick = (item: IMenuItem) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export = Header
export as namespace Header
