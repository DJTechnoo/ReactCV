import React from 'react';
import {Grid} from '@material-ui/core';
import {ProgressBar} from 'react-bootstrap';


const Progress = ({label, prog, variant}) => {
    return <Grid container direction="row">
        <Grid item md={3} xs={4}>
            <p>{label}</p>
        </Grid>
        <Grid item md={6} xs={4}>
            <ProgressBar now={prog} variant={variant}/>
        </Grid>
    </Grid>
}

export default Progress;