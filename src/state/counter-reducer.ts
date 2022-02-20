type PlusCounterType = {
    type: "PLUS-COUNTER"
}

type ResetCounterType = {
    type: "RESET-COUNTER",
    payload: number
}

type ActionType = PlusCounterType | ResetCounterType

export type CounterType = {
    counter: number
}

const initState: CounterType = {
    counter: 0
}

export const CounterReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "PLUS-COUNTER": {
            console.log(state.counter)
            return {...state, counter: ++state.counter}
        }
        case "RESET-COUNTER": {
            return {...state, counter: action.payload}
        }
        default:
            return state;
    }
}

export const plusCounter = ():PlusCounterType => ({type: "PLUS-COUNTER"} as const);
export const resetCounter = (payload: number):ResetCounterType => ({type: "RESET-COUNTER", payload} as const);