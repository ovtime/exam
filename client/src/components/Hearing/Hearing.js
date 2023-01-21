import HearingInfo from "./HearingInfo";
import Menu from "../Menu";
import AttendeesGrid from "../Attendees/Attendees";
import ControlBar from "../ControlBar";
import ExitButton from "../buttons/ExitButton";
import Row from "../layout/Row";
import Container from "../layout/Container";

const Hearing = (props) => {
  // TODO: rename?

  return (
    // <div className="container text-center">
    <Container>
      <Row>
        <HearingInfo hearingId={props.hearingId} />
      </Row>
      <Row>
        <AttendeesGrid></AttendeesGrid>
      </Row>
      <Row>
        <ControlBar></ControlBar>
      </Row>
      <Menu></Menu>{" "}
      {/*{TODO: SidePanel contain menu, logo, and exit button?} */}
      <ExitButton></ExitButton>
      {/*TODO: SidePanel contain menu, logo, and exit button?} */}
    </Container>
    // </div>
  );
};

export default Hearing;
