import { useContext } from 'react';
import { AppBar, Box } from '@mui/material';
import { Outlet } from 'react-router';
import UserName from './User/UserName';
import Navbar from './Navbar';
import { UserContext } from '../App';

const AppLayout = () => {
    const [state, ] = useContext(UserContext);

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'primary', paddingBottom: 2, paddingTop: 2 }}>
                <Navbar />
            </AppBar>
            <Box sx={{ width: '30%', m: 2 }}>
                {state.id &&
                 <UserName></UserName>}
            </Box>
            
            <Outlet /> 
        </div>
    );
};

export default AppLayout;