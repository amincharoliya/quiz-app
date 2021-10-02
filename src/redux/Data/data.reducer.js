import { ADDITION } from './data.types';

const username = window.localStorage.getItem('name');

const INITIAL_STATE = {
    quizzes: {
        name: username !== null ? username : 'Guest',
        quizData: [{
            name: 'General Knowledge',
            score: '9',
            id: '9',
        },
        {
            name: 'Entertainment: Music',
            score: '7',
            id: '12',
        }]
    },
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADDITION:
            const newData = action.payload;
            return {

                ...state, quizzes: {...state.quizzes,name: newData},

            };

            default: return state;

    }

};

export default reducer;