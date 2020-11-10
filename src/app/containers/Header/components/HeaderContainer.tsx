/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 13:44
 **/
import * as React from 'react'


interface Props {
    children: any
}


const HeaderContainer: React.FC = (props: Props) => {
    const { children } = props

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                            {{children}}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderContainer
