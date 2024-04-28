import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "./actionType";

const initialState = {
    question_category: '',
    question_difficalty: '',
    question_type: '',
    score: 0,
    amount_question: 5
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_DIFFICULTY:
            return {
                ...state,
                question_difficalty: action.payload
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                amount_question: action.payload
            };
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            };
        case CHANGE_TYPE:
            return {
                ...state,
                question_type: action.payload
            };
        default:
            return state
    }
}

export default reducer;