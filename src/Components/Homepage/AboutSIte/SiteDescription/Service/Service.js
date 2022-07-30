import React from 'react'
import {Grid,Typography} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Service = ({serviceTitle,serviceDescription}) => {
  return (
    <Grid container item  direction="column" rowSpacing={0.5}>
<Grid container item columnSpacing={1} >
    <Grid item>
<CheckCircleOutlineIcon color="rgb(122, 125, 133)"/>
</Grid>
<Grid item>
<Typography variant="p"  fontFamily="Roboto , sans-serif" fontWeight="bold" fontSize="20px">
{serviceTitle}
</Typography>
</Grid>
</Grid>
<Grid item >
<Typography variant="p"  fontFamily="Roboto , sans-serif" fontSize="18px" color="rgb(122, 125, 133)" fontWeight="bold">
{serviceDescription}
</Typography>
</Grid>
</Grid>

  )
}

export default Service