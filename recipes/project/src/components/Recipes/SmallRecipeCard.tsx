import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';


const SmallRecipeCard = ({ text, id }: { text: string, id: number }) => {

    const baseUrl = 'http://localhost:5173/all-recipes/';
    return (
        <Box display="flex" justifyContent="flex-end" sx={{ padding: 2, marginRight: 2 }}>

            <Link to={baseUrl + id} style={{
                padding: 2, textDecoration: 'none', color: 'inherit'
            }}>
                
                <Typography variant="h6" sx={{
                    borderRadius: 10, padding: 2,
                    marginRight: 2, color: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                    }
                }}>
                    {text}   📌
                </Typography>
            </Link>

        </Box>
    );
};

export default SmallRecipeCard;