import { ADDITION } from './data.types';

export const additionData = (payload) => {
    return {
        type: ADDITION,
        payload
    };
};

