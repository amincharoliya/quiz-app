import { ADDITION } from './data.types';

const username = window.localStorage.getItem('name');

const INITIAL_STATE = {
    quizzes: {
        name: username !== null ? username : 'Guest'
    },
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADDITION:
            const newData = action.payload;
            return {

                ...state, quizzes: {name: newData},

            };

            default: return state;

    }

};

export default reducer;