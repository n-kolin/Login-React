import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { FormEvent, useContext } from "react";
import { useRef } from "react"
import axios from "axios";
import { UserType } from "../../userReducer";
import Swal from "sweetalert2";
import { UserContext } from "../../App";
const UpdateDetails = () => {

    const [state, dispatch] = useContext(UserContext);
    console.log(state);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const baseUrl = 'http://localhost:3000/api/user/'
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const userUpdateData: Partial<UserType> = {
            firstName: firstNameRef.current?.value || state.firstName,
            lastName: lastNameRef.current?.value || state.lastName,
            email: emailRef.current?.value || state.email,
            address: addressRef.current?.value || state.address,
            phone: phoneRef.current?.value || state.phone,
        }
        try {
            await axios.put(baseUrl,
                {
                    firstName: firstNameRef.current?.value || state.firstName,
                    lastName: lastNameRef.current?.value || state.lastName,
                    email: emailRef.current?.value || state.email,
                    address: addressRef.current?.value || state.address,
                    phone: phoneRef.current?.value || state.phone,
                },
                {
                    headers: { 'user-id': state.id, }
                })
        }
        catch (error) {
            if (error.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: 'User not found',
                });
                
            }
        }
        dispatch({
            type: 'UPDATE_USER',
            data: userUpdateData,
        })
        setOpen(false)
    }

    const fields = [
        { id: "first-name", ref: firstNameRef },
        { id: "last-name", ref: lastNameRef },
        { id: "email", ref: emailRef },
        { id: "address", ref: addressRef },
        { id: "phone", ref: phoneRef },
    ]
    return (<>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Update the following details:
                </Typography>
                <form onSubmit={handleSubmit}>
                    {fields.map((field) =>
                        <TextField
                            key={field.id}
                            id={field.id}
                            label={field.id.replace("-", " ")}
                            variant="filled"
                            inputRef={field.ref}
                            sx={{ margin: 0.5, bgcolor: 'secondary' }}
                        />)}
                    <div><Button type="submit" variant="contained"
                        sx={{ mt: 2, bgcolor: 'secondary.dark', color: '#ffffff', '&:hover': { bgcolor: 'secondary.main' } }}>save</Button></div>
                </form>
            </Box>
        </Modal>
    </>)
}

export default UpdateDetails