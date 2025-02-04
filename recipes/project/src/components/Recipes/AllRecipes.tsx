import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getAllRecipes } from "../../store/recipesSlice";
import SmallRecipeCard from "./SmallRecipeCard";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { RecipeType } from "../../types/RecipeType";
import RecipesMessage from "./RecipesMessage";

const AllRecipes = () => {

    const { id } = useParams<{ id: string }>(); // חילוץ ה-ID מה-URL

    const [recipes, setRecipes] = useState<RecipeType[]>([] as RecipeType[]);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        const fetchRecipes = async () => {
            const action = await dispatch(getAllRecipes());
            setRecipes(action.payload as RecipeType[]); // Access the payload

        };

        fetchRecipes();
    }, [dispatch]);

    return (<>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 15 }}>
            <Box>
                {id ? <RecipeCard />
                :<RecipesMessage></RecipesMessage>
                }
            </Box>
            <Box>
                {recipes && recipes.map((recipe) => <SmallRecipeCard key={recipe.id} text={recipe.title} id={recipe.id} />)}
            </Box>
        </Box >

    </>)
}
export default AllRecipes

