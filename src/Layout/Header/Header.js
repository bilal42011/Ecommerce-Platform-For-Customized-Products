import React,{useState,useEffect} from "react";
import { AppBar,Typography,Menu,MenuItem,Toolbar,Container,Box,IconButton,Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink,useNavigate,useLocation} from "react-router-dom";
import styles from "../../styles/header.module.css";

const pages=[{name:"Browse",url:"browse"},{name:"Become a Seller",url:"/becomeseller"},{name:"Request a Custom Product",url:"/requestcustomproduct"}]
console.log(styles);
 const nonActiveClassname=[styles.navLink,styles.nonactiveNavLink].join(" ");
 console.log(nonActiveClassname);
 const ActiveClassname=[styles.navLink,styles.activeNavLink].join(" ");
 console.log(ActiveClassname);
 const headingStyles={textDecoration:"none",color:"#061522"};
 

const Header=()=>{
console.log("component rerendred");
    let navigate=useNavigate();
    let location=useLocation();
let [anchorEl,setanchorEl]=useState(null);
const handleMenuButtonClick=(event)=>{
setanchorEl(event.currentTarget);
console.log(event.currenttarget)
}
const handleClose=()=>{
    setanchorEl(null);
}

useEffect(()=>{
    console.log("inside useEffect");
    setanchorEl(null);
},[location]);


return <AppBar sx={{backgroundColor:"white"}}>
<Container maxWidth="xl">
<Toolbar disableGutters sx={{my:1}}>

<Box sx={{
    display:{xs:"flex",md:"none"},flexGrow:{xs:1,sm:0}
    }}>
<IconButton
size="large"
aria-label="menu button for small screen"
aria-controls="menu-appbar"
aria-haspopup="true"
onClick={handleMenuButtonClick}>
<MenuIcon sx={{fontSize:"2rem"}}/>
</IconButton>
<Menu
anchorEl={anchorEl}
id="menu-appbar"
open={Boolean(anchorEl)}
onClose={handleClose}
keepMounted
anchorOrigin={{
    vertical:"bottom",
    horizontal:"left"
}}
transformOrigin={{
    vertical:"top",
    horizontal:"right"
}}
sx={{
    display:{xs:"block",md:"none"}
}}>
{
    pages.map((page,index)=><MenuItem key={index} sx={{display:"block"}} >
        <NavLink to={`${page.url}`} 
        style={({isActive})=>isActive?{textDecoration:"none",display:"block",color:"#061522",fontWeight:"bold"}
        :{display:"block",color:"#62646a",textDecoration:"none"}}>
        {page.name}
        </NavLink>
        </MenuItem>)
}

</Menu>
</Box>

<Typography variant="h4" 
sx={{display:{xs:"none",sm:"flex"},flexGrow:1,fontWeight:"bolder",fontFamily:'Roboto Condensed, sans-serif'}}>
<NavLink to="/" style={()=>headingStyles} end>
    E-Workers
</NavLink>
</Typography>
<Box sx={{display:{xs:"none",md:"flex"}}}>
{
    pages.map((page,index)=> <NavLink key={index} to={`${page.url}`} 
    className={({isActive})=>isActive?ActiveClassname:nonActiveClassname}>
        <Button variant="text"
         sx={{fontSize:"16px",fontFamily:'Roboto, sans-serif',fontWeight:"bold",textTransform:"none"}} color="inherit">
        {page.name}
        </Button>
        </NavLink>
)
}
</Box>
<Box sx={{display:"flex"}}>
<Button variant="outlined" onClick={()=>navigate("login")} 
sx={{marginLeft:2,fontFamily:'Roboto, sans-serif',fontWeight:"bolder"}}>LOG IN</Button>
<Button variant="contained" onClick={()=>navigate("signup")}
 sx={{marginLeft:1,fontFamily:'Roboto, sans-serif',fontWeight:"bolder"}}>JOIN</Button>
</Box>
</Toolbar>
 </Container>
</AppBar> 

}

export default Header;