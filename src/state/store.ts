import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "./counter-reducer";
import {SettingReducer} from "./setting.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: CounterReducer,
    setting: SettingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>

// store.subscribe(() => {
//     localStorage.setItem("maxAddition", JSON.stringify(store.getState().setting.minAddition));
//     localStorage.setItem("minAddition", JSON.stringify(store.getState().setting.maxAddition));
// })

// @ts-ignore
window.store = store;