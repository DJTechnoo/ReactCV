import React from 'react';
import Progress from '../UI/Progress';
import {Grid} from '@material-ui/core';
import {Fade} from 'react-reveal';

const Skills = () => {

    const progLangs = [
        {label: "C++", prog: 70},
        {label: "JS", prog: 70},
        {label: "React", prog: 50},
        {label: "PHP", prog: 30},
    ];

    const langs = [
        {label: "Norwegian", prog: 90},
        {label: "Dutch", prog: 87},
        {label: "English", prog: 96},
        {label: "Mandarin", prog: 55},
    ];

    return (
        <div>  
            <Fade>  
            <Grid container direction="row">
                <Grid item md={1} xs={1}></Grid>
                <Grid item md={5} xs={11}>
                    <Grid container direction="column">
                        <Grid item><h1>Programming</h1></Grid>
                        {progLangs.map(progLang => (     
                            <Grid item md={12}>
                                <Progress label={progLang.label} prog={progLang.prog} variant="info"/>
                            </Grid>
                        ))}  
                    </Grid>
                </Grid>

                <Grid item md={1} xs={1}></Grid>
                <Grid item md={5} xs={11}>
                    <Grid container direction="column">
                        <Grid item><h1>Languages</h1></Grid>
                        {langs.map(lang => (     
                            <Grid item md={12}>
                                <Progress label={lang.label} prog={lang.prog} variant="warning"/>
                            </Grid>
                        ))} 
                    </Grid> 
                </Grid>
            </Grid>               
            </Fade>
        </div>
    )
}

export default Skills;