import React, { useState } from 'react';
import {Typography,Box,Chip} from "@mui/material";
import { DataGrid, gridClasses} from '@mui/x-data-grid';

let columns=[
{
    field:"_id",
    headerName:"Request ID",
    align:"center",
    headerAlign:"center",
    width:200, 
},
{
field:"description",
headerName:"Description",
width:250,
align:"center",
headerAlign:"center",
},
{
    field:"budget",
    headerName:"Budget",
    type:"number",
    align:"center",
    headerAlign:"center",
    width:200,
},

{
    field:"timeline",
    headerName:"Tiemline",
    align:"center",
    headerAlign:"center",
    width:200,
    valueFormatter:(params)=>`${params.value} Days` 
},
{
    field:"requestStatus",
    headerName:"Request Status",
    headerAlign:"center",
    align:"center",
    width:200,
    renderCell:(params)=>{
        return params.value=="Pending"?<Chip label="Pending"/>:<Chip label="Open" color="success"/>
    }
}
];


let ProposalsDataGrid=()=>{

    let [pageSize,setPageSize]=useState(5);
    let [selectionModel,setSelectionModel]=useState([]);

    return (
<Box sx={{paddingTop:"3rem"}}>
<Typography sx={{width:"fit-content",fontSize:"2.5rem",margin:"auto",
paddingBottom:"3rem",textAlign:"center",
color:"#152035",
fontFamily: "Roboto condensed, sans-serif",fontWeight:"bold"}}
variant="h5">Your Custom Requests</Typography>

<Box sx={{width:1100,margin:"auto"}}>
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
selectionModel={selectionModel}
onSelectionModelChange={(newSelectionModel)=>{
    console.log(newSelectionModel);
setSelectionModel(newSelectionModel);
}}
sx={{
[`& .${gridClasses.row}`]:{

    backgroundColor:"rgb(128,128,128,0.2)",
    cursor:"pointer"
},
}} />
</Box>
</Box>
)
    }

export default ProposalsDataGrid;




// Dummy Values to Fill the Rows

let rows=[
    {
        _id:1,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"
    },
    {
        _id:2,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Open"
    },
    {
        _id:3,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"    },
    {
        _id:4,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"
    },
    {
        _id:5,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"
    },
    {
        _id:6,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Open"
    },
    {
        _id:7,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"    },
    {
        _id:8,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"
    },
    {
        _id:9,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Open"
    },
    {
        _id:10,
        description:"We are looking for a craftsman who can build a iron frame with vast expertise in field",
        budget:400,
        timeline:3,
        requestStatus:"Pending"},
]