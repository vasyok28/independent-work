import {SettingAdditionType} from "../CounterComponent/CounterSettings/CounterSettings";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {resetCounter} from "./counter-reducer";

type SetSettingType = {
    type: "SET-SETTING",
    payload: SettingAdditionType
}

type ActionType = SetSettingType;

const initState = {
    minAddition: 0,
    maxAddition: 10,
    errorMin: false,
    errorMax: false
} as SettingAdditionType;

export const SettingReducer = (state= initState, action: ActionType) => {
    switch (action.type) {
        case "SET-SETTING": {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
}

export const setSetting = (payload: SettingAdditionType): SetSettingType => ({type: "SET-SETTING", payload})

// THUNK
export const setSettingTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    localStorage.setItem('maxAddition', JSON.stringify(getState().setting.maxAddition));
    localStorage.setItem('minAddition', JSON.stringify(getState().setting.minAddition));
}

export const setSettingFromLocalStorageTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const maxAddition = localStorage.getItem('maxAddition');
    if(maxAddition) {
        const value = JSON.parse(maxAddition);
        dispatch(setSetting({...getState().setting, maxAddition: value}));
    }

    const minAddition = localStorage.getItem('minAddition');
    if(minAddition) {
        const value = JSON.parse(minAddition);
        dispatch(setSetting({...getState().setting, minAddition: value}));
        dispatch(resetCounter(value));
    }
}