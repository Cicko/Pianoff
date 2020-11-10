/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:29
 **/
import * as React from 'react'
import { Grid, GridColumn, Header, Image, Segment, Tab } from 'semantic-ui-react';
import Calendar from './components/Calendar/Calendar';

export interface ProfileHeaderContainerProps {
    biography: string,
    name: string,
    imgURL: string,
    repertoire: Array<any>,

    subscription: any,
    // TODO: Subscription (information about prices, conditions)

    calendar: any,
    // TODO: Calendar structure for classes, events, etc... (Calendar maybe better in ProfileBody (Videos, Lessons, Calendar, Sheets, products, etc....)
}

const ProfileHeaderContainer: React.FC<ProfileHeaderContainerProps> = (props: ProfileHeaderContainerProps) => {
    const { biography, name, imgURL, repertoire } = props

    const panes = [
        { menuItem: 'Bio', render: () => <Tab.Pane>{biography}</Tab.Pane> },
        { menuItem: 'Repertoire', render: () => <Tab.Pane>{repertoire}</Tab.Pane> },
        { menuItem: 'Book classes', render: () => <Tab.Pane><Calendar/></Tab.Pane> },
    ]

    const ImageContainer = (
        <GridColumn width={4}>
            <Image src={imgURL} size='medium' circular />
            <Header>{name}</Header>
        </GridColumn>
    )

    return <Segment>
        <Grid>
            {ImageContainer}
            <GridColumn width={12}>
                <Tab panes={panes} menu={{ pointing: true }}/>
            </GridColumn>
        </Grid>
    </Segment>
}

export default ProfileHeaderContainer
