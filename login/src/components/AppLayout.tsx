import { Outlet } from "react-router"
import NavBar from "./NavBar"


const AppLayout = ()=>{

    return(<>
    
    <NavBar/>
    <div style={{margin:"150px"}}>
        
    <Outlet/></div>
    
    </>)
}
export default AppLayout