import React from 'react';
import {Button} from 'react-bootstrap';
import {Fade} from 'react-reveal';


const MyGitHub = () => {

    const projects = [
        {name: "My Github", url: "https://github.com/DJTechnoo/"},
        {name: "Omnom (design)", url: "https://djtechnoo.github.io/omnom/"},
        {name: "Space-x", url: "https://djtechnoo.github.io/space-x-missions"},
        {name: "COVID-19 Tracker", url: "https://djtechnoo.github.io/covid-19"},
        {name: "Animations", url: "https://djtechnoo.github.io/animations"}
    ];

    const click = url => {
        window.location.href = url;
    }

    return <div className="box">
     
            <h3 className="title">Github and projects</h3>

            <div>
                {projects.map(p =>(
                <Fade>
                    <Button block size="sm"
                    onClick={() => {click(p.url)}}
                    >{p.name}
                        </Button>
                </Fade>
                ))}
           
            </div>
    </div>
}

export default MyGitHub;