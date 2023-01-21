import { useContext } from "react";
import UserContext from "../User/UserContext";
import Microphone from "../buttons/Microphone";
import Row from "../layout/Row";
import Col from "../layout/Col";

const AttendeeTile = (props) => {
  const videoContainerStyle = {
    height: props.role === "judge" ? "160px" : "120px", // TODO: responsive
    backgroundColor: "beige",
  };

  const user = useContext(UserContext);
  const userIsCurrentAttendee = props.id === user.id;
  const isPermittedToMute =
    userIsCurrentAttendee || user.permission === "admin";


  const moreInfo = `${userIsCurrentAttendee ? "אני - " : ""}${
    props.roleDescription
  }`; // TODO: rename

  return (
    <>
      <Row>
        <Col style={videoContainerStyle}>
          <p>{moreInfo}</p>
          {/* // TODO: set video element with css thjat will not hide below elements
          <video  controls autoPlay>
            <source src="myVideo.webm" type="video/webm" />
            <source src="myVideo.mp4" type="video/mp4" />
          </video> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Microphone permittedToMute={isPermittedToMute}></Microphone>
        </Col>
        <Col>
          <p>
            {props.roleDescription}
            <br></br>
            {props.name}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AttendeeTile;
