/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.10.20 - 18:04
 **/
import * as React from 'react'
import { Image } from 'semantic-ui-react';
import LogoImg from 'assets/images/ruda-made/logo.png';

export interface LogoHeaderProps {

}

const LogoHeader: React.FC<LogoHeaderProps> = (props: LogoHeaderProps) => {

    return (
        <a className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" href="/">
            <Image src={LogoImg} height={50}/>
        </a>
    )
}

export default LogoHeader
