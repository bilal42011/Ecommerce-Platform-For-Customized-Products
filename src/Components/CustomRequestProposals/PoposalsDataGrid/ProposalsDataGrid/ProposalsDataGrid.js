import React from 'react';
import {Box,Avatar,Typography} from "@mui/material";
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import bilal from "../../../../assets/bilal.jpg";
import UsersActions from "./UsersActions/UsersActions";
import safwan from "../../../../assets/safwan.webp";

let columns=[
{
    field:"username",
    headerName:"Username",
    width:100, 
},
{
field:"photoURL",
headerName:"Avatar",
width:150,
align:"center",
headerAlign:"center",
renderCell:(params)=>{
return <Avatar src={params.value} alt={params.row.name} sx={{width:51,height:51}}/>
}
},
{
    field:"name",
    headerName:"Name",
    align:"center",
    headerAlign:"center",
    width:130,
},
{
    field:"price",
    headerName:"Price",
    align:"center",
    headerAlign:"center",
    type:"number",
    width:100,
},
{
    field:"location",
    headerName:"Location",
    align:"center",
    headerAlign:"center",
    width:100,
},
{
    field:"timeline",
    headerName:"Tiemline",
    type:"number",
    align:"center",
    headerAlign:"center",
    width:100,
},
{
    field:"actions",
    headerName:"Actions",
    headerAlign:"center",
    align:"center",
    width:250,
    renderCell:(params)=>{
        return <UsersActions {...{params} }/>
    }
}
];


let ProposalsDataGrid=()=>{

    return (
<>        
<Typography sx={{width:"fit-content",
margin:"auto",marginBottom:"3rem",paddingTop:"3rem",fontSize:"2.5rem",
color:"#152035",
fontFamily: "Roboto condensed, sans-serif",fontWeight:"bold"}}
variant="h5">Custom Request Poposals</Typography>
<Box sx={{width:1000,margin:"auto",}}>
<DataGrid
autoHeight
rowHeight={75}
isRowSelectable={()=>false}
{...{columns,rows}} 
pagination
getRowSpacing={(params)=>({
    top:params.isFirstVisible?0:6,
    bottom:params.isLastVisible?0:6
})}
 pageSize={5}

sx={{
[`& .${gridClasses.row}`]:{

    backgroundColor:"rgb(128,128,128,0.2)"
}
}}

 />
</Box>
</>
  )
    }

export default ProposalsDataGrid;

let rows=[
    {
        id:1,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:2,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:3,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:4,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:5,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:6,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:7,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:8,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:9,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        id:10,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
]