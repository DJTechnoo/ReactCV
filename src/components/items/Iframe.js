import React, {useState} from 'react';

const Iframe = ({src}) => {

    const [loading, setLoading] = useState(true);

    const loadHandler = () => {
        setLoading(false);
    }

    return (
        <div>
        {loading ? (<p>Loading</p>) : null}
        <iframe className={loading? "hide": "open" }
            src={src} 
            frameborder='0'
            onLoad={loadHandler} 
            allowtransparency='true'>
        </iframe>

        </div>
    )
}

export default Iframe;