import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Destination,HomeState } from '../utils/Interface';

const initialState: HomeState ={
    destinations: [],
    loading: false,
    error: null,
};

const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        fetchDestinationsStart(state){
            state.loading = true;
            state.error =  null;
        },
        fetchDestinationsSuccess(state,action: PayloadAction<Destination[]>){
            state.destinations = action.payload;
            state.loading = false;
        },
        fetchDestinationsFailure(state,action : PayloadAction<string>){
            state.error = action.payload;
            state.loading =  false;
        },
    },
});  

export const { fetchDestinationsStart, fetchDestinationsSuccess, fetchDestinationsFailure } =  homeSlice.actions;
export default homeSlice.reducer;

export type HomeActions = 
  | ReturnType<typeof fetchDestinationsStart>
  | ReturnType<typeof fetchDestinationsSuccess>
  | ReturnType<typeof fetchDestinationsFailure>;


