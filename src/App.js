import React from "react";
import Layout from "./Layout/Layout";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";


const App=()=>{
return (
<Layout>
    <Container maxWidth="xl" sx={{marginTop:"5.5rem"}} disableGutters>
    <Outlet/>
    </Container>
</Layout>
)
}

export default App;