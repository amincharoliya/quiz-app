import { ADDITION, ADDQUIZ } from './data.types';

const username = window.localStorage.getItem('name');
const LocalQuizData = window.localStorage.getItem('quizzes');
const LocalQuizDataParsed = LocalQuizData !== null || LocalQuizData !== '' ? JSON.parse(LocalQuizData) : '';

const INITIAL_STATE = {
    quizzes: {
        name: username !== null ? username : 'Guest',
        quizData: LocalQuizDataParsed !== '' ? LocalQuizDataParsed : null,
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