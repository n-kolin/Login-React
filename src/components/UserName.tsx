import { useContext } from 'react';
import { mainUserContext } from './userReducer';
import { Avatar } from '@mui/material';
import { orange } from '@mui/material/colors';

const UserName = () => {

    const { state, dispatch } = useContext(mainUserContext)

    
    return (
        <>
            <div>
                <div >
                    <Avatar sx={{ bgcolor: orange[200], width: 50, height: 50 }}>{state.firstName?.charAt(0).toUpperCase()+state.lastName?.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div>
                Hello! {state.firstName? `${state.firstName}`: 'guest'}
                </div>
            </div>

        </>
    )
}

export default UserName