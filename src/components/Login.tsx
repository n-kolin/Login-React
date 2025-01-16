import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useReducer, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import userReducer, { initialUser, mainUserContext } from './userReducer';
import UserName from './UserName';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import UpdateDetails from './UpdateDetails';
import axios from 'axios';


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

export default function Login() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isSignIn, setIsSignIn] = useState(false);//signIn / signUp
  const [user, userDispatch] = useReducer(userReducer, initialUser)

  const [isLogged, setIsLogged] = useState(false);
  
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)


  const handleSubmit = async (e: FormEvent) => {

    const baseUrl = 'http://localhost:3000/api/user/'
    e.preventDefault();

      try {
        let status = isSignIn?'login':'register'
        const res = await axios.post(baseUrl + status, {
          email: emailRef.current?.value,
          password: passwordRef.current?.value
        })
        
        userDispatch(
          {

            type: 'CREATE_USER',
            data: {
              id: isSignIn?res.data.user.id:res.data.userId,
              email: emailRef.current?.value || '',
              password: passwordRef.current?.value || '',
              firstName: '',
              lastName: '',
              address: '',
              phone: '',
            }
          })
      }
      catch (error:any) {
        
        switch(error.status)
        {
          case 422:{
            alert(`${emailRef.current?.value} already exists`)          
          }
          break;
          case 401:{
            alert('Username or password is incorrect')
          }
          break;

        }
        console.log(error);

      }

    setIsLogged(true)
    setOpen(false)


  }

  const signOut = ()=>{

    setIsLogged(false);
    userDispatch({
      type: 'UPDATE_USER',
      data: initialUser,
  })
  }

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<VisibilityIcon />);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<VisibilityOffIcon />);
      setType('text')
    } else {
      setIcon(<VisibilityIcon />)
      setType('password')
    }
  }


  return (
    <mainUserContext.Provider value={{ state: user, dispatch: userDispatch }}>
      <div style={{ display: 'flex' }}>

        <div style={{ marginRight: '10px' }}>
          {isLogged && <Button onClick={() => { signOut() }}>sign out</Button>}
          {isLogged || <Button onClick={() => { handleOpen(); setIsSignIn(true) }}>sign in</Button>}
          {isLogged || <Button onClick={() => { handleOpen(); setIsSignIn(false) }}>sign up</Button>}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Please fill your details

              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleSubmit}>
                  <TextField id="email" label="email" variant="filled" inputRef={emailRef} type='email' required />
                  <TextField id="password" label="password" variant="filled" inputRef={passwordRef} type={type} required />

                  <span onClick={handleToggle}>
                    {icon}
                  </span>
                  <Button type="submit">Send</Button>
                </form>
              </Typography>
            </Box>
          </Modal>
        </div>

        <div style={{ marginRight: '10px' }}>
          {isLogged && <UserName></UserName>}
        </div >
        <div >
          {isLogged && <UpdateDetails></UpdateDetails>}
        </div>

      </div>
    </mainUserContext.Provider>

  );
}