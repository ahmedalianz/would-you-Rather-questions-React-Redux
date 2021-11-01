import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import users from './users/users'
import currentUser from './users/currentUser'
import questions from './questions/unansweredq'
const store = configureStore({
    reducer:{
        users,currentUser,questions
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({serializableCheck: false})
    // .concat(logger)
})
export default store