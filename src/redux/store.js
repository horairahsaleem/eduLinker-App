import { configureStore } from "@reduxjs/toolkit";

import {userReducer,profileReducer,subscriptionReducer} from './Reducers/userReducer.js';
import {courseReducer} from './Reducers/courseReducer.js'
import {adminReducer} from './Reducers/adminReducer.js'
import {otherReducer} from './Reducers/otherReducer.js'





const store= configureStore({
    reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
})
export default store   ;
export const server = 'https://edulinker-backend.onrender.com/api/v1';
