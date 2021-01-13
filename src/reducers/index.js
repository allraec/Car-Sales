import {combineReducers} from "redux";
import {addFReducer} from "./addFReducer"
import {addedFReducer} from "./addedFReducer";

export const rootReducer = combineReducers({
    addedFeature: addedFReducer,
    addFReducer: addFReducer
})
