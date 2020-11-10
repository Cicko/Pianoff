/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:07
 **/
import * as React from 'react'
import { Grid, Header, Image, Loader, Segment, Message, Dimmer } from 'semantic-ui-react'

export interface VideoInterface {

}

export interface VideosContainerProps {
    loading: boolean
    error: Error
    data: Array<VideoInterface> // TODO: VideoInterface (name, src, comments, etc...) to type is Array<VideoInterface>
}

const VideosContainer: React.FC<VideosContainerProps> = (props: VideosContainerProps) => {
    const { data, loading, error } = props

    return (
        <Segment>
            <Dimmer active={loading}>
                <Loader />
            </Dimmer>
            <Header>VIDEOS</Header>
            <Grid relaxed columns={4}>
                {data.map(el =>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                )}
            </Grid>
            {!!error && <Message error>{error.message}</Message>}
        </Segment>
    )
}

export default VideosContainer
