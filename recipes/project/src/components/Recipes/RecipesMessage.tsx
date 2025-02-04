import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const RecipesMessage = () => {
    return (
        <Box
            sx={{
                padding: 2,
                backgroundColor: '#e0f7fa',
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 3
            }}
        >
            <Typography variant="h5" component="div" sx={{ marginBottom: 2, color: '#00695c' }}>
                All my recipes. Click on a specific recipe to learn how to make it!
            </Typography>
            <img
                src="https://img.freepik.com/premium-photo/wood-kitchen-utensils-wooden-table-background-with-notepad-copy-space_522560-146.jpg?ga=GA1.1.1129303057.1731009829&semt=ais_hybrid_sidr"
                alt="Recipe"
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '16px'
                }}
            />


        </Box>
    );
};
export default RecipesMessage