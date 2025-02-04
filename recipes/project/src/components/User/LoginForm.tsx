import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Email, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router';
const LoginForm = ({ onSubmit }: { onSubmit: (email: string, pass: string) => void }) => {


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: '#f5f5f5',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px'
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await onSubmit(emailRef.current?.value || '', passwordRef.current?.value || '')
        handleClose();

    }
    return (<>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2" sx={{ mb: 2, color: 'primary.dark' }}
                >
                    Please fill your details
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ m: 1, width: '25ch' }} >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            endAdornment={
                                <InputAdornment position="start">
                                    <Email sx={{ color: 'primary.dark' }} />
                                </InputAdornment>
                            }
                            label="Email"
                            inputRef={emailRef}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                        sx={{ color: 'primary.dark' }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            inputRef={passwordRef}
                        />
                    </FormControl>
                    <div><Button type="submit" variant="contained"
                        sx={{
                            mt: 2, bgcolor: 'primary.dark', color: '#ffffff', '&:hover': {
                                bgcolor: 'primary.main'
                            }
                        }}>
                        Send
                    </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    </>)
}

export default LoginForm