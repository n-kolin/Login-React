import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { FormEvent, useContext } from "react";
import { useRef } from "react"
import { mainUserContext, UserType } from './userReducer';
import axios from "axios";


const UpdateDetails = () => {

    const { state, dispatch } = useContext(mainUserContext)

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
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
            const res = await axios.put(baseUrl,
                {
                    firstName: firstNameRef.current?.value || state.firstName,
                    lastName: lastNameRef.current?.value || state.lastName,
                    email: emailRef.current?.value || state.email,
                    address: addressRef.current?.value || state.address,
                    phone: phoneRef.current?.value || state.phone,
                },
                {
                    headers: {
                        'user-id': state.id,
                    }
                })

        }
        catch (error:any) {
            console.log(error);

            if(error.status===404){
                alert(`${emailRef.current?.value} user not found`)
            }
        }

        dispatch({
            type: 'UPDATE_USER',
            data: userUpdateData,
        })
        setOpen(false)

    }
    return (
        <>
            <div>
                <Button onClick={handleOpen}>Update details</Button>
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
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit}>
                                <TextField id="name" label="first name" variant="filled" inputRef={firstNameRef} />
                                <TextField id="name" label="last name" variant="filled" inputRef={lastNameRef} />
                                <TextField id="email" label="email" variant="filled" inputRef={emailRef} />
                                <TextField id="address" label="address" variant="filled" inputRef={addressRef} />
                                <TextField id="phone" label="phone" variant="filled" inputRef={phoneRef} />

                                <Button type="submit">save</Button>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default UpdateDetails