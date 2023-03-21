import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'

export interface ordersState {
    value: boolean []
}

const initialState:ordersState = {
    value:[true,false,false, false,false]
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setorders: (state, action:PayloadAction<number>) =>{
            let tmpstate = [false,false,false, false,false];
            state.value = tmpstate;
            tmpstate[action.payload] = true;
            state.value = tmpstate;
        },
    },
    extraReducers: {
        [HYDRATE]:(state, action) =>{
            return{
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setorders} = ordersSlice.actions;

export const selectordersState = (state:AppState) => state.orders.value;

export default ordersSlice.reducer