import { useContext, useState } from "react";
import { initialUser } from "../../userReducer";
import axios from "axios";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import Swal from "sweetalert2";
import { UserContext } from "../../App";

const Login = () => {

    const [state, dispatch] = useContext(UserContext);
    const styleButton = {
        margin: '8px',
        padding: '8px',
        borderRadius: '10px',
        backgroundColor: 'secondary.main',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'secondary.dark',
        }
    }
    const [isSignIn, setIsSignIn] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isTry, setIsTry] = useState(false);


    const signOut = () => {
        setIsLogged(false);
        dispatch({
            type: 'UPDATE_USER',
            data: initialUser,
        })
    }
    const urlServer = 'http://localhost:3000/api/user/'

    const onSubmit = async (email: string, pass: string) => {
        setIsLogged(false)
        try {
            let status = isSignIn ? 'login' : 'register'
            await axios.post(urlServer + status, {
                email: email,
                password: pass
            }).then((res) => {
                dispatch(
                    {
                        type: 'CREATE_USER',
                        data: {
                            id: isSignIn ? res.data.user.id : res.data.userId,
                            email: email,
                            password: pass,
                            firstName: '',
                            lastName: '',
                            address: '',
                            phone: '',
                        }
                    })
                setIsLogged(true)

            })
        }
        catch (error) {
            switch (error.status) {
                case 400: {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${email} already exists`,
                    });
                }
                    break;
                case 401: {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: 'Username or password is incorrect',
                    });
                }
                    break;
            }
        }

        setIsTry(false)
        console.log(state);
    }

    return (<>

            {isLogged &&
                <Button sx={styleButton} onClick={() => { signOut() }}>sign out</Button>}
            {isLogged ||
                <Button sx={styleButton} onClick={(e) => {
                    e.preventDefault();
                    setIsTry(true)
                    setIsSignIn(true)
                }}>
                    sign in
                </Button>}
            {isLogged || <Button sx={styleButton} onClick={(e) => {
                e.preventDefault();
                setIsTry(true)
                setIsSignIn(false)
            }}>
                sign up
            </Button>}

            {isTry && <LoginForm onSubmit={onSubmit}></LoginForm>}

    </>)
}
export default Login