import { configureStore } from "@reduxjs/toolkit";

import {userReducer} from './Reducers/userReducer.js'




const store= configureStore({
    reducer:{
user:userReducer
    },  
})
export default store   ;
export const server = 'https://edulinker-backend.onrender.com/api/v1';
