import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mathReducer } from './reducers/mathReducer';


const rootReducer = combineReducers({
    math: mathReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;