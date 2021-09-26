import { ADDITION } from './data.types';


    const INITIAL_STATE = {
        quizzes: {},
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