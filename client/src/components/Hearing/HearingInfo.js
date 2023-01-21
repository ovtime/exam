import { useEffect, useState } from 'react';
import Header from "./Header";
import { getHearing } from '../../services/hearing';
import Col from '../layout/Col';

const HearingInfo = (props) => {


    const isRecording = true;// TODO: set as state or props?


    const [hearingInfo, setHearingInfo] = useState({});

    useEffect(() => {
        getHearing(props.hearingId)
            .then(hearingInfo => {
                setHearingInfo(hearingInfo);
            });
    }, [props.hearingId]);

    return (<>
        <Col>
            {isRecording && 'Recording'}
        </Col>
        <Col>
            <Header title={hearingInfo.title} caseNumber={hearingInfo.caseNumber}></Header>
        </Col>
    </>)
}

export default HearingInfo;