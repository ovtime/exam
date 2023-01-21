import { useState } from "react";


// TODO: create base component of stopable button to camera, microphone and share screen?
const Camera = (props = { cameraOff: false }) => {
    const [isCameraOff, setIsCameraOff] = useState(props.cameraOff);

    const buttonLabel = isCameraOff ? 'מצלמה כבויה' : 'מצלמה';

    return <button onClick={() => setIsCameraOff(!isCameraOff)}>{buttonLabel}</button>
};

export default Camera;