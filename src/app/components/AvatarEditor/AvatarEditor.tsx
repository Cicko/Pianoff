/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 14.10.20 - 20:11
 **/
import * as React from 'react'
import Editor from 'react-avatar-editor'
import ProfilePic from '../../../../assets/images/ruda-made/profile-ruda.png'

export interface AvatarEditorInterface {
    // TODO: Add events
}

const AvatarEditor: React.FC<AvatarEditorInterface> = (props: AvatarEditorInterface) => {

    return (
        <Editor
            image={ProfilePic}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
            // TODO: Add events
        />
    )
}

export default AvatarEditor


