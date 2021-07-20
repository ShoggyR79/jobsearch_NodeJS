import { applyMiddleware, combineReducers, createStore } from "redux"
import reduxThunk from "redux-thunk"
import { ApplicantReducer } from "./reducers/ApplicantReducer"
import { CompanyReducer } from "./reducers/CompanyReducer"

const rootReducer = combineReducers({
    ApplicantReducer,
    CompanyReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))