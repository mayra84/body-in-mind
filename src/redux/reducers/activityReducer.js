//@ts-check
const defaultState = []

const ADD_ACTIVITY = 'ADD_ACTIVITY'
// const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY'

export function addActivity(activity) {
    return {
        type: ADD_ACTIVITY,
        activity
    }
}

export function activityReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ACTIVITY:
            return [
                ...state,
                action.activity
            ]
        default:
            return state
    }
} 