import { CalcActionTypes } from '../types/math';

interface MathState {
    display: number[] | string[],
    accumulated: number[] | string[],
};

const initialState: MathState = {
    display: [0],
    accumulated: []
};

export const mathReducer = (state = initialState, action: any): MathState => {
    switch (action.type) {
        case CalcActionTypes.UPDATE:
            if (state.display[0] === 0) {
                return { ...state, display: [action.payload], accumulated: [...state.accumulated, action.payload] };
            }
            return { ...state, display: [...state.display, action.payload], accumulated: [...state.accumulated, action.payload] };
        case CalcActionTypes.ADD:
            return { ...state, accumulated: [...state.accumulated, action.payload] }
        default:
            return state;
    }
};

export const updateActionCreator = (value: number | string) => ({ type: CalcActionTypes.UPDATE, payload: value });
export const addActionCreator = (value: number | string) => ({ type: CalcActionTypes.ADD, payload: value });
