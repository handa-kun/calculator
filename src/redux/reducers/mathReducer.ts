import { CalcActionTypes } from '../types/math';

interface MathState {
    display: number[] | string[],
    accumulated: number,
};

const initialState: MathState = {
    display: [0],
    accumulated: 0
};

export const mathReducer = (state = initialState, action: any): MathState => {
    switch (action.type) {
        case CalcActionTypes.UPDATE:
            if (state.display[0] === 0) {
                return { ...state, display: [action.payload] };
            }
            return { ...state, display: [...state.display, action.payload] };
        case CalcActionTypes.ADD:

            return { ...state, display: [] };
        default:
            return state;
    }
};

export const updateActionCreator = (value: number | string) => ({ type: CalcActionTypes.UPDATE, payload: value });
