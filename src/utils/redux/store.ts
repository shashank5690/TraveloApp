import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import { rootEpic } from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

const store  = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(epicMiddleware),
 });

 epicMiddleware.run(rootEpic);

 export type AppDispatch = typeof store.dispatch;
 export type RootState = ReturnType<typeof store.getState>;

 export default store;
