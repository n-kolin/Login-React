import { Toolbar, Typography, Box } from '@mui/material';
import Login from './User/Login';
import { Link } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../App';

const tabStyle = {
    textDecoration: 'none',
    color: '#92afae',
    border: '1px solid #92afae',
    margin: '3px',
    padding: '3px',
    borderRadius: '10px',
}
const Navbar = () => {
    const [state,] = useContext(UserContext);

    return (<>
        <Toolbar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ marginLeft: 2, p: 2 }}>

                    <Login></Login>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Link to='home' style={tabStyle}>
                        <Typography variant="h6" sx={{ marginRight: 2 }}>home</Typography>
                    </Link>

                    <Link to='about' style={tabStyle}>
                        <Typography variant="h6" sx={{ marginRight: 2 }}>about</Typography>
                    </Link>

                    {state.id!==0 &&
                        <Link to='add' style={tabStyle}>
                            <Typography variant="h6" sx={{ marginRight: 2 }}>add recipe</Typography>
                        </Link>
                    }
                    <Link to='all-recipes' style={tabStyle}>
                        <Typography variant="h6" sx={{ marginRight: 2 }}>all recipes</Typography>
                    </Link>

                </Box>
            </Box>
        </Toolbar>

    </>);
};

export default Navbar;