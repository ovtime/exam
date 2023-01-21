//import { get } from './requestHandler';

// NOTE: this is the trueth function
// export const getUser = async (userId) =>
//     get({ endpoint: `api/user/${userId}` });

// NOTE: I create a mock
export const getUser = async (userId) =>
  Promise.resolve({
    id: userId,
    name: 'עו"ד קובי יעקובי',
    role: "lawyer",
    roleDescription: "צד עורר",
    permission: "attendee", // TODO: rename permission description
  });
