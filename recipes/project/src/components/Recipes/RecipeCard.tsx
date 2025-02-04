// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { GetRecipeType, RecipeType } from '../../types/RecipeType';
import { Box, Container } from '@mui/material';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreType } from '../../store/store';

export default function RecipeCard() {

    const { id } = useParams<{ id: string }>();
    const imageUrl = "https://img.freepik.com/free-photo/party-handmade-pink-cake-pops-with-colorful-sprinkles-white-sticks-white-ceramic-plate-sweet-candy-bar_132075-8162.jpg?t=st=1738017676~exp=1738021276~hmac=9a0f3c989d65375504fdbcd135d7b072cca7d6cca377cbc927744fa45d7ca033&w=996"

    const { recipes: { recipes: recipesList } } = useSelector((store: StoreType) => store);
    const newRecipe = recipesList.find((r) => r.id === Number(id)) as GetRecipeType

    console.log(newRecipe);

    return (<>{newRecipe &&
        <Container sx={{ marginLeft: 10, width: 500 }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", paddingInline: 10 }}>
                <Typography variant="h4" color='primary.dark'>{newRecipe?.title}</Typography>
                <Box
                    component="img"
                    sx={{
                        height: 93,
                        width: 140,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        paddingBottom: 1,
                        borderStartEndRadius: 15,

                    }}

                    alt="cake img"
                    src={imageUrl}
                />
            </Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{ fontSize: 26 }} component="span">❓What is necessary</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {newRecipe?.ingredients
                        ?.map(item =>
                            <Typography sx={{
                                fontSize: 18, '&:hover': {
                                    backgroundColor: 'secondary.main', borderRadius: 10
                                }
                            }}> 🔖 {item} </Typography>
                        )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography sx={{ fontSize: 26 }} component="span">❓How to prepare</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: 18 }}> {newRecipe?.instructions}</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Show more</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>

        </Container>
    }
    </>
    );
}