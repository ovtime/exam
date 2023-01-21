//import { get } from './requestHandler';

// NOTE: this is the trueth function
// export const getAllAttendees = async (hearingId) =>
//     get({ endpoint: `api/attendees/${hearingId}` });

// NOTE: I create a mock
export const getAllAttendees = async (hearingId) =>
  Promise.resolve([
    {
      id: 234,
      name: 'עו"ד שושנה שושני',
      role: "lawyer",
      roleDescription: "צד משיב",
    },
    {
      id: 123,
      name: 'עו"ד קובי יעקובי',
      role: "lawyer",
      roleDescription: "צד עורר",
    },
    {
      id: 345,
      name: "כבוד השופטת ישראל ישראלוף",
      role: "judge",
      roleDescription: "ועדת ערר לענייני קורונה",
    },
  ]);
