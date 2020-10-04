/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:07
 **/
import * as React from 'react'
import { Grid, Header, Image, Loader, Segment } from 'semantic-ui-react'

export interface VideosContainerProps {

}

const VideosContainer: React.FC<VideosContainerProps> = (props: VideosContainerProps) => {

    return (
        <Segment>
            <Header>VIDEOS</Header>
            <Grid relaxed columns={4}>
                {Array.from({ length: 20 }).map(el =>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                )}
            </Grid>
        </Segment>
    )
}

export default VideosContainer
