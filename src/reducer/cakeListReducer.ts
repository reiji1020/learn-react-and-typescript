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
        funds: 10000
    } as CakeState,
    reducers: {
        setCakeList: (state) => {
            state.cakeList = cakeListSetting.initialList
        },
        sellCake: (state, action) => {
            state.cakeList[action.payload].stock -= 1;
            state.funds += state.cakeList[action.payload].price;
        },
        makeCake: (state, action) => {
            state.cakeList[action.payload].stock += 1;
        }
    }
})

export const { setCakeList, sellCake, makeCake } = cakeList.actions;

export const cakeStockInfo = (state: RootState) => state.cakeList.cakeList;
export const fundsState = (state: RootState) => state.cakeList.funds;

export default cakeList.reducer;