import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../../Screens/ScreenHome/redux/HomeSlice";
import authReducer from '../../Screens/ScreenLogin/redux/authSlice';


const rootReducer = combineReducers({
    home: homeReducer,  // home ka reducer
    auth: authReducer
    // more will like auth reducer etc
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;