import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RecipeType } from '../types/RecipeType';

interface RecipesState {
    recipes: RecipeType[];
    loading: boolean;
    error: string | null;
}

const initialState: RecipesState = {
    recipes: [],
    loading: false,
    error: null,
};

export const getAllRecipes = createAsyncThunk<RecipeType[], void>(
    'recipes/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/api/recipes');
            return response.data; 
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const addRecipe = createAsyncThunk<RecipeType, Partial<RecipeType>>(
    'recipes/add',
    async (recipe: Partial<RecipeType>, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3000/api/recipes', recipe, { headers: { 'user-id': recipe.authorId } });
            return response.data; 
        } catch (e) {
            console.log(e);
            
            return thunkAPI.rejectWithValue(e);

        }
    }
);

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(getAllRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addRecipe.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes.push(action.payload as RecipeType);
            })
            .addCase(addRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default recipesSlice