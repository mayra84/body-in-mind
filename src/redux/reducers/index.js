import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { calendarReducer } from "./calendarReducer"
// import { bigCalendar} from './bigCalendarReducer' 



const rootReducer = combineReducers({
    favorites: favoritesReducer,
    calendar: calendarReducer,
    // bigCalendar: bigCalendarReducer
})

export default rootReducer
