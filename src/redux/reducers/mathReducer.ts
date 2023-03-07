import { CalcActionTypes } from '../types/math';

interface MathState {
    display: number,
    accumulated: number,
};

const initialState: MathState = {
    display: 0,
    accumulated: 0
};

export const mathReducer = (state = initialState, action: any): MathState => {
    switch (action.type) {
        case CalcActionTypes.ADD: {

        }
        case CalcActionTypes.DIVIDE: {

        }
        case CalcActionTypes.MULTIPLY: {

        }
        case CalcActionTypes.SUBTRACT: {

        }
        case CalcActionTypes.UPDATE: {

        }
        default:
            return state
    }
};