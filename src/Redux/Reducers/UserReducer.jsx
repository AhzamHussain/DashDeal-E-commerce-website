import { CREATE_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED } from "../Constant"
export default function UserReducer(state = [], action) {
    switch (action.type) {
        case CREATE_USER_RED:
            return [...state, action.payload]

        case GET_USER_RED:
            return action.payload

        case UPDATE_USER_RED:
            return state.map(x => x.id === action.payload.id ? { ...action.payload } : x)

        case DELETE_USER_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
