import { useContext, useState } from "react"
import { object, string } from "yup"
import { GetRecipeType } from "../../types/RecipeType"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import RecipeTypeSelector from "./RecipeTypeSelector"
import { UserContext } from "../../App"

const RecipeForm = ({ submitFunc }: { submitFunc: (newRecipe: Partial<GetRecipeType>) => void }) => {
    const [state, dispatch] = useContext(UserContext);
    const RecipeSchema = object({
        title: string().required('Title is required').min(5, "title must be at least 5 characters"),
        ingredients: string().required('ingredients are required'),
        instructions: string().required('instructions are required'),
    })

    type Fields = {
        title: string,
        ingredients: string,
        instructions: string
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm({ resolver: yupResolver(RecipeSchema) })

    const [open, setOpen] = useState(true);

    const onSubmit: SubmitHandler<Fields> = async (data) => {

        setOpen(false)
        console.log(state);

        await submitFunc(
            {
                title: data.title,
                instructions: data.instructions,
                ingredients: data.ingredients.split('\n'),
                authorId: state.id
            }
        )
        reset()
    }

    const fields = [
        { id: 'title', label: 'Recipe name:', multiline: false },
        { id: 'ingredients', label: 'Ingredients:', multiline: true, minRows: 5 },
        { id: 'instructions', label: 'Preparation Instructions:', multiline: true, minRows: 5 },
    ];

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (<>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
                <Typography variant="h6" component="h2" sx={{ mb: 2, color: 'secondary.dark' }}>
                    Add your recipe details:
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map(({ id, label, multiline, minRows }) => (
                        <TextField
                            key={id}
                            sx={{ margin: 2, width: 250 }}
                            id={id}
                            label={label}
                            multiline={multiline}
                            minRows={minRows}
                            {...register(id as keyof Fields)}
                            helperText={errors[id as keyof Fields]?.message}
                            error={errors[id as keyof Fields] !== undefined}
                        />
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Button type="submit" sx={{
                            bgcolor: 'primary.dark', color: '#000', '&:hover': {
                                backgroundColor: 'primary.main'
                            }
                        }}>
                            Submit
                        </Button></div>
                        <Box sx={{ width: '50%', alignItems: 'center' }}>
                        <RecipeTypeSelector ></RecipeTypeSelector>
                    </Box>
                    </Box>
                </form>
            </Box>
        </Modal>
    </>)
}
export default RecipeForm