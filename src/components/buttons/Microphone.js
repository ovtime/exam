import { useState } from "react";

// TODO: create base component of stopable button to camera, microphone and share screen?
const Microphone = (props = { mute: false }) => {
  const [isMuted, setIsMuted] = useState(props.mute);

  const buttonLabel = isMuted ? "מיקרופון כבוי" : "מיקרופון";

  const muteIfPermmited = () => {
    // TODO: rename
    if (props.permittedToMute) {
      setIsMuted(!isMuted);
    }
  };

  return <button onClick={muteIfPermmited}>{buttonLabel}</button>;
};
export default Microphone;
