import '../index.css'

import React, {useState} from 'react';

const Assistant = () => {

    const [animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        setAnimate(true);

        setTimeout(() => {
            setAnimate(false);
        }, 1000);
    };

    return (
        <>
             <button onClick={handleButtonClick}>Move Object</button>
            <div className={`object ${animate ? 'animate' : ''}`}></div>
        </>
    );
}

export default Assistant;