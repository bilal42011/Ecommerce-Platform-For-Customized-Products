import React,{useState} from 'react';
import {Box,Avatar,Typography,Grid} from "@mui/material";
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import bilal from "../../../../assets/bilal.jpg";
import UsersActions from "./UsersActions/UsersActions";
import safwan from "../../../../assets/safwan.webp";

let columns=[
{
    field:"username",
    headerName:"Username",
    width:150,
    align:"center",
    headerAlign:"center" 
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
    width:150,
},
{
    field:"price",
    headerName:"Price",
    align:"center",
    headerAlign:"center",
    type:"number",
    width:150,
},
{
    field:"location",
    headerName:"Location",
    align:"center",
    headerAlign:"center",
    width:150,
},
{
    field:"timeline",
    headerName:"Tiemline",
    type:"number",
    align:"center",
    headerAlign:"center",
    width:150,
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
    let [pageSize,setPageSize]=useState(5);
    
    return (
        <Box sx={{paddingTop:"3rem"}}>
<Typography sx={{paddingBottom:"3rem",width:"fit-content",fontSize:"2.5rem",
color:"#152035",margin:"auto",textAlign:"center",
fontFamily: "Roboto condensed, sans-serif",fontWeight:"bold"}}
variant="h5">Your Custom Proposals</Typography>
<Box  sx={{width:1300,margin:"auto"}}>
<DataGrid
autoHeight
rowHeight={95}
{...{columns,rows}} 
pageSize={pageSize}
onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
rowsPerPageOptions={[5,10,20]}
getRowSpacing={(params)=>({
    top:params.isFirstVisible?0:6,
    bottom:params.isLastVisible?0:6
})}
getRowId={(row)=>row._id}
sx={{
[`& .${gridClasses.row}`]:{

    backgroundColor:"rgb(128,128,128,0.2)",
    cursor:"pointer"
},
}}

 />
</Box>
</Box>
  )
    }

export default ProposalsDataGrid;


//Dummy proposal rows for filling out table

let rows=[
    {
        _id:1,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:2,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:3,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:4,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:5,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:6,
        username:"bilal50081",
        photoURL:bilal,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:7,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:8,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:9,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
    {
        _id:10,
        username:"bilal50081",
        photoURL:safwan,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15
    },
]