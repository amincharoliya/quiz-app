import { ADDITION, ADDQUIZ} from './data.types';

export const additionData = (payload) => {
    return {
        type: ADDITION,
        payload
    };
};

export const additionQUIZ = (payload) => {
    return {
        type: ADDQUIZ,
        payload
    };
};

