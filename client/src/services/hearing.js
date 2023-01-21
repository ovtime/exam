//import { get } from './requestHandler';

// NOTE: this is the trueth function
// export const getHearing = async (hearingId) =>
//     get({ endpoint: `api/hearing/${hearingId}` });


// NOTE: I create a mock
export const getHearing = async (hearingId) => Promise.resolve({
    title: 'משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות',
    caseNumber: '64949-02-22'
});

