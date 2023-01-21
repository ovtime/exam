import axios from 'axios';

const request = async (settings) => {

    const domain = 'https://localhost:32866'; // TODO: replace domain automaticlly 

    const baseSettings = {
        crossDomain: true,
        dataType: 'json',
        url: `${domain}/${settings.endpoint}`,
    };

    try {
        const response = await axios(Object.assign({}, baseSettings, settings));
        return response;
    }
    catch (error) {
        console.log(`failed on call to ${settings.endpoint}`);
    }
};


export const get = async (settings) =>
    await request(Object.assign({}, { method: 'GET' }, settings));

export const post = async (settings) =>
    await request(Object.assign({}, { method: 'POST' }, settings));
