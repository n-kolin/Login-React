import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GetRecipeType } from '../types/RecipeType';

interface RecipesState {
    recipes: GetRecipeType[];
    loading: boolean;
    error: string | null;
}

const initialState: RecipesState = {
    recipes: [],
    loading: false,
    error: null,
};

export const getAllRecipes = createAsyncThunk<GetRecipeType[], void>(
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

export const addRecipe = createAsyncThunk<GetRecipeType, Partial<GetRecipeType>>(
    'recipes/add',
    async (recipe: Partial<GetRecipeType>, thunkAPI) => {
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
                state.recipes.push(action.payload as GetRecipeType);
            })
            .addCase(addRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default recipesSlice