//@ts-check
const defaultState = []

const FAVORITE_ADD_ACTIVITY = 'FAVORITE_ADD_ACTIVITY'
const FAVORITE_REMOVE_ACTIVITY = 'FAVORITE_REMOVE_ACTIVITY'

export function favoriteAddActivity(activity) {
    return {
        type: FAVORITE_ADD_ACTIVITY,
        activity
    }
}

export function favoriteRemoveActivity(activity) {
    return {
        type: FAVORITE_REMOVE_ACTIVITY,
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
        case FAVORITE_REMOVE_ACTIVITY:
            return state.filter((activity) => {
                return activity.id !== action.activity.id
            })
        default:
            return state
    }
} 
