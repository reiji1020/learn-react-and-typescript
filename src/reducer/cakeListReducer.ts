import { createSlice } from "@reduxjs/toolkit";
import { cakeInfo, cakeListSetting } from "../const/cakeListSetting";
import { RootState } from "../app/store";

type CakeState = {
    cakeList: cakeInfo[],
    funds: number
}


export const cakeList = createSlice({
    name: 'cakeList',
    initialState: {
        cakeList: [],
        funds: 10000,
    } as CakeState,
    reducers: {
        setCakeList: (state) => {
            state.cakeList = cakeListSetting.initialList
        }
    }
})

export const { setCakeList } = cakeList.actions;

export const cakeStockInfo = (state: RootState) => state.cakeList.cakeList;

export default cakeList.reducer;