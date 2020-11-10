/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 17:57
 **/
import * as React from 'react'
import { IPage } from 'pages';
import { useTranslation } from 'lib/hooks';
import { onItemClick, PagesHeaderProps } from '../config/header';

const PagesHeader: React.FC<PagesHeaderProps> = (props: PagesHeaderProps) => {
    const t = useTranslation()
    const { pages, onPageClick } = props

    return (
        <div
            className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
            id="navbarSupportedContent">
            <ul className="navbar-nav align-self-stretch" style={{ maxHeight: 799 }}>
                {pages.filter(page => !page.hideFromHeader).map(page => (
                    <li className={`nav-item ${page.active ? 'active' : ''}`} >
                        <div className="nav-link" onClick={onPageClick(page)}>{t(page.title)}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PagesHeader
