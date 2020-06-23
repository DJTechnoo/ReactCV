import React from 'react';
import {Fade} from 'react-reveal';
import Iframe from '../items/Iframe';

const MyArt = () => {

    const links = [
        "https://www.youtube.com/embed/OdWGfwzNl2g",
        "https://open.spotify.com/embed/album/3PbWrlsZtmHrPqBT994oCk",
        "https://www.youtube.com/embed/-_W8hyRdwHA",
        "https://open.spotify.com/embed/album/7ADTj15o6P9Nxgjc0edzAK",
        "https://open.spotify.com/embed/track/1tzC8PcrnO5wcDZULMkEbe"
    ]

    return (
        <div className="embed-container"> 
            <Fade>
            {links.map(l =>(
                <Iframe src={l}/>
            ))}
            </Fade>
        </div>         
    );
}

export default MyArt;