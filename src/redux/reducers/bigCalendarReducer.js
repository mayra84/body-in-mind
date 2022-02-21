
import { v4 as uuidv4 } from 'uuid';
const defaultState = {
    activities: [],
    date:''
} 

const CREATE_EVENT = 'CREATE_EVENT'

export function createEvent(activity, date) {
    return {
        type: CREATE_EVENT,
        activity,
        date
    }
}

export function bigCalendar(state= defaultState, action) {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state, activities: [...state.activities, {
                    activity: action.activity,
                    date: action.date,
                    uuid: uuidv4()
                }]
            }
            default:
                return state
    }
}