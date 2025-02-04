import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router"
import Login from "./Login"
import { green } from "@mui/material/colors"

const NavBar = () => {

    return (<>
        <AppBar sx={{ bgcolor: green[200] }}>


            <Toolbar sx={{ display: "flex", justifyContent:"space-between" }}>
                <Typography variant="h6" component="div" >

                    <Login />

                </Typography>
                <div style={{display:'flex', gap:'10px'}}>
                <Typography variant="h6" component="div"  >
                    <Link to='/home'>home</Link>
                </Typography>
                <Typography variant="h6" component="div" >
                    <Link to='/about'>about</Link>

                </Typography>
                </div>
            </Toolbar>
        </AppBar>
    </>)
}
export default NavBar