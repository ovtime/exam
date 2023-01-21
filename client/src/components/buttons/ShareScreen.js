import { useState } from "react";


// TODO: create base component of stopable button to camera, microphone and share screen?
const ShareScreen = (props = { shareScreen: false }) => {
    const [isScreenShared, setIsScreenShared] = useState(props.shareScreen);

    const buttonLabel = isScreenShared ? 'עצור שיתוף' : 'שיתוף';

    return <button onClick={() => setIsScreenShared(!isScreenShared)}>{buttonLabel}</button>
};
export default ShareScreen;