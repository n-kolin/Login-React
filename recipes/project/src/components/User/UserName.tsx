import { useContext, useState } from 'react';
import { Avatar, Typography, Box, Paper, Chip, Button } from '@mui/material';
import { orange, teal, purple } from '@mui/material/colors';
import { Link } from 'react-router';
import { UserContext } from '../../App';

const UserName = () => {
    const [state, ] = useContext(UserContext);

    const [display, setDisplay] = useState(false)
    return (<>
        <Paper
            elevation={3}
            sx={{
                position: 'absolute',
                display: 'fixed',
                alignItems: 'center',
                padding: 2,
                borderRadius: 2,
                bgcolor: teal[50],
                transition: '0.3s',
                '&:hover': {
                    bgcolor: teal[50],
                }
            }}
        >
            <Button onClick={() => setDisplay(true)} >
                <Avatar sx={{ bgcolor: orange[300], width: 60, height: 60 }}  >
                    {state.firstName?.charAt(0).toUpperCase() + state.lastName?.charAt(0).toUpperCase()}
                </Avatar>
                
            </Button>
            {display &&
                <Box sx={{
                    position: 'absolute', 
                    top: '70px', 
                    left: 0, 
                    bgcolor: teal[50],
                    border: `2px solid #000`,
                    borderRadius: 2,
                    padding: 2,
                    width: '200px',
                    zIndex: 1000, 

                }}>
                    <Button onClick={() => setDisplay(false)} sx={{ m: 0 }}>X</Button>
                    
                    <Typography variant="h5" sx={{ color: purple[800] }}>
                        Hello {state.firstName ? `${state.firstName}` : 'guest'} ! 😊
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome back to your dashboard.
                    </Typography>
                    <Link to='update'>
                        <Chip label="Update Details" color="primary" sx={{ marginTop: 1 }} />
                    </Link>
                    
                </Box>}
        </Paper>

    </>
    );
}

export default UserName;