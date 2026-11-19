import { CREATE_FEATURE_RED, DELETE_FEATURE_RED, GET_FEATURE_RED, UPDATE_FEATURE_RED } from "../Constant"
export default function FeatureReducer(state = [], action) {
    switch (action.type) {
        case CREATE_FEATURE_RED:
            return [...state, action.payload]

        case GET_FEATURE_RED:
            return action.payload

        case UPDATE_FEATURE_RED:
            return state.map(x => x.id === action.payload.id ? { ...action.payload } : x)

        case DELETE_FEATURE_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
