import { combineReducers, createStore } from "redux";
import todolist from "../modules/todolist"

const rootReducer = combineReducers({
    todolist
})

const store = createStore(rootReducer);

export default store