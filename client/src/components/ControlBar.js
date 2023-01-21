import ShareScreen from "./buttons/ShareScreen";
import Microphone from "./buttons/Microphone";
import Camera from "./buttons/Camera";
import Col from "react-bootstrap/esm/Col";

const ControlBar = () => (
  <Col>
    <ShareScreen></ShareScreen>
    <Microphone permittedToMute={true}></Microphone>
    <Camera></Camera>
  </Col>
);

export default ControlBar;
