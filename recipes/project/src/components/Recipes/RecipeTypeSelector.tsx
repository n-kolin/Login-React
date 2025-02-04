
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Fastfood, LocalDining, Cake, SetMeal, Restaurant } from '@mui/icons-material';

// Define ENUM for Recipe Types
enum RecipeType {
    Vegan = 'Vegan',
    GlutenFree = 'Gluten Free',
    DairyFree = 'Dairy Free',
    Dessert = 'Dessert',
    QuickMeals = 'Quick Meals',
    Fish ='Fish',
    MainMeals='Main Meals',
}

const RecipeTypeSelector= () => {
    const [selectedType, setSelectedType] = useState<RecipeType | null>(null);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedType(event.target.value as RecipeType);
    };

    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel id="recipe-type-label">Select Type</InputLabel>
            <Select
                labelId="recipe-type-label"
                value={selectedType || ''}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0', color: '#333' }}
            >
                <MenuItem value="">
                    <em>--Select--</em>
                </MenuItem>
                <MenuItem value={RecipeType.Vegan}>
                    <Fastfood fontSize="small" /> Vegan
                </MenuItem>
                <MenuItem value={RecipeType.GlutenFree}>
                    <LocalDining fontSize="small" /> Gluten Free
                </MenuItem>
                <MenuItem value={RecipeType.DairyFree}>
                    <Fastfood fontSize="small" /> Dairy Free
                </MenuItem>
                <MenuItem value={RecipeType.Dessert}>
                    <Cake fontSize="small" /> Dessert
                </MenuItem>
                <MenuItem value={RecipeType.QuickMeals}>
                    <Fastfood fontSize="small" /> Quick Meals
                </MenuItem>
                <MenuItem value={RecipeType.Fish}>
                    <SetMeal fontSize="small" /> Fish
                </MenuItem>
                <MenuItem value={RecipeType.MainMeals}>
                    <Restaurant fontSize="small" /> Main Meals
                </MenuItem>
            </Select>
           
        </FormControl>
    );
};

export default RecipeTypeSelector;

