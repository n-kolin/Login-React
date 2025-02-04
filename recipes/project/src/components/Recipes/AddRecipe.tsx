import { useDispatch } from 'react-redux';

import RecipeForm from './RecipeForm';
import { addRecipe } from '../../store/recipesSlice';
import { AppDispatch } from '../../store/store';
import { RecipeType } from '../../types/RecipeType';

const AddRecipe = () => {
    const dispatch = useDispatch<AppDispatch>();
    const addNewRecipe = (newRecipe: Partial<RecipeType>) => {
        console.log(newRecipe);

        dispatch(addRecipe(newRecipe));
        
    };

    return (<>
        <RecipeForm submitFunc={addNewRecipe} />
    </>);
};

export default AddRecipe;