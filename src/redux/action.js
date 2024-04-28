import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_SCORE,
    CHANGE_TYPE,

} from './actionType'

export const handleCategoryQuestions = payload => ({
    type: CHANGE_CATEGORY,
    payload,
})
export const handleAmountQuestions = payload => ({
    type: CHANGE_AMOUNT,
    payload,
})
export const handleDifficultyQuestions = payload => ({
    type: CHANGE_DIFFICULTY,
    payload,
})
export const handleScoreQuestions = payload => ({
    type: CHANGE_SCORE,
    payload,
})
export const handleTypeQuestions = payload => ({
    type: CHANGE_TYPE,
    payload,
})
