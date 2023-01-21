import { useState, useEffect } from "react";
import AttendeeTile from "./AttendeeTile";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { getAllAttendees } from "../../services/attendee";
import Container from "../layout/Container";

const Attendees = ({ hearingId }) => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getAllAttendees(hearingId).then((attendees) => {
      setAttendees(attendees);
    });
  }, [hearingId]);

  const judge = attendees.find((attendee) => attendee.role === "judge");

  return (
    <Container>
      <Row>
        <Col>
          <AttendeeTile {...judge}></AttendeeTile>
        </Col>
      </Row>
      <Row>
        {attendees
          .filter((attendee) => attendee.role !== "judge")
          .map((attendee) => {
            return (
              <Col key={attendee.id}>
                <AttendeeTile {...attendee}></AttendeeTile>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Attendees;
