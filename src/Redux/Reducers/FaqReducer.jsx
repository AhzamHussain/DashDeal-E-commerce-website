import { CREATE_FAQ_RED, DELETE_FAQ_RED, GET_FAQ_RED, UPDATE_FAQ_RED } from "../Constant"
export default function FaqReducer(state = [], action) {
    switch (action.type) {
        case CREATE_FAQ_RED:
            return [...state, action.payload]

        case GET_FAQ_RED:
            return action.payload

        case UPDATE_FAQ_RED:
            return state.map(x => x.id === action.payload.id ? { ...action.payload } : x)

        case DELETE_FAQ_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
