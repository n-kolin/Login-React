import { configureStore } from '@reduxjs/toolkit';
import recipesSlice from './recipesSlice'

const store = configureStore({
    reducer:
        { recipes: recipesSlice.reducer, }



});

export type StoreType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;