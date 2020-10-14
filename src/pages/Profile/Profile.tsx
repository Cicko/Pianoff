import * as React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import VideosContainer from './components/Videos/VideosContainer';
import ProfileHeaderContainer from './components/ProfileHeader/ProfileHeaderContainer';
import { TranslationManager } from '../../lib/services';

export interface ProfileProps {


}

const Profile: React.FC<ProfileProps> = () => {
    const t = React.useContext(TranslationManager.Context) as Function

    return (
        <div>
            <Divider/>
            <Header>{t('pages.profile.header')}</Header>
            <ProfileHeaderContainer
                biography={''}
                imgURL={''}
                repertoire={[]}
                name={''}
                subscription={null}
                calendar={null}
            />
            <VideosContainer data={Array.from({ length: 10 })} loading={false} error={null}/>
        </div>
    )
}

export default Profile
