import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../../Screens/ScreenHome/redux/HomeSlice";

const rootReducer = combineReducers({
    home: homeReducer,  // home ka reducer
    // more will like auth reducer etc
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;