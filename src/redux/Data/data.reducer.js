import { ADDITION, ADDQUIZ } from './data.types';

const username = window.localStorage.getItem('name');
const LocalQuizData = JSON.parse( window.localStorage.getItem('quizzes') );

const INITIAL_STATE = {
    quizzes: {
        name: username !== null ? username : 'Guest',
        quizData: LocalQuizData !== null ? LocalQuizData : null,
    },
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADDITION:
            const newData = action.payload;
            return {

                ...state, quizzes: {...state.quizzes,name: newData},

            };

        case ADDQUIZ:
            const QUIZDATA = action.payload;
            return {

                ...state, quizzes: {...state.quizzes,quizData: QUIZDATA},

            };

            default: return state;

    }

};

export default reducer;