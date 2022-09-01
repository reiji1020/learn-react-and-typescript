import { createSlice } from "@reduxjs/toolkit";
import { materialInfo, materialListSetting } from "../const/materialListSetting";
import { RootState } from "../app/store";

type MaterialState = {
    materialList: materialInfo[]
}

export const materialList = createSlice({
    name: 'materialList',
    initialState: {
        materialList: [],
    } as MaterialState,
    reducers: {
        setMaterialList: (state) => {
            state.materialList = materialListSetting.initialList
        },
        consumeMaterial: (state, action) => {
            switch (action.payload) {
                case 0:
                // ショートケーキは卵1つ、小麦粉1つ、牛乳1つを消費する
                    state.materialList[0].stock -= 1;
                    state.materialList[1].stock -= 1;
                    state.materialList[2].stock -= 1;
                    return state;
                case 2:
                // チーズケーキは卵1つ、小麦粉1つ、牛乳2つを消費する
                    state.materialList[0].stock -= 1;
                    state.materialList[1].stock -= 2;
                    state.materialList[2].stock -= 1;
                    return state;
                case 3:
                // シュークリームは卵1つ、小麦粉2つ、生クリーム2つを消費する
                    state.materialList[0].stock -= 2;
                    state.materialList[2].stock -= 1;
                    state.materialList[3].stock -= 2;
                    return state;
                case 4:
                // ロールケーキは卵2つ、小麦粉2つ、牛乳1つ、生クリーム1つを消費する
                    state.materialList[0].stock -= 2;
                    state.materialList[1].stock -= 1;
                    state.materialList[2].stock -= 2;
                    state.materialList[3].stock -= 1;
                    return state;
                case 5:
                // モンブランは卵1つ、小麦粉1つ、牛乳1つ、マロン1つを消費する
                    state.materialList[0].stock -= 1;
                    state.materialList[1].stock -= 1;
                    state.materialList[2].stock -= 1;
                    state.materialList[4].stock -= 1;
                    return state;
                default:
                    return state;
            }
        }
    }
})

export const { setMaterialList, consumeMaterial } = materialList.actions;

export const materialStockInfo = (state: RootState) => state.materialList.materialList;

export default materialList.reducer;