//@ts-check
const defaultState = []

const FAVORITE_ADD_ACTIVITY = 'FAVORITE_ADD_ACTIVITY'
// const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY'

export function favoriteAddActivity(activity) {
    return {
        type: FAVORITE_ADD_ACTIVITY,
        activity
    }
}

export function favoritesReducer(state = defaultState, action) {
    switch (action.type) {
        case FAVORITE_ADD_ACTIVITY:
            return [
                ...state,
                action.activity
            ]
        default:
            return state
    }
} 