import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import pages, { IPage } from '../../../pages'

export interface BodyProps {

}

const Body: React.FC<BodyProps> = (props: BodyProps) => {

    const PagesSwitcher = (pages as Array<IPage>).map(page => {
        const { Component, route } = page

        return (
            <Route path={route}>
                <Component />
            </Route>
        )
    })

    return <Container>
        <Switch>
            {PagesSwitcher}
        </Switch>
    </Container>
}

export default Body
