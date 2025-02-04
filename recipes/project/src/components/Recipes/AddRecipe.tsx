import { useDispatch } from 'react-redux';

import RecipeForm from './RecipeForm';
import { addRecipe } from '../../store/recipesSlice';
import { AppDispatch } from '../../store/store';
import { GetRecipeType } from '../../types/RecipeType';

const AddRecipe = () => {
    const dispatch = useDispatch<AppDispatch>();
    const addNewRecipe = (newRecipe: Partial<GetRecipeType>) => {
        console.log(newRecipe);

        dispatch(addRecipe(newRecipe));
    };

    return (<>
        <RecipeForm submitFunc={addNewRecipe} />
    </>);
};

export default AddRecipe;