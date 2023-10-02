import '../index.css'

import React, { useState } from 'react';

import Assistant from './assistant';
import { Canvas } from 'react-three-fiber';

const Scene = () => {

    const [position, setPosition] = useState([0, 0, 0]);

    const handleMove = (x, y, z) => {
        setPosition([x, y, z]);
    };

    return (
        <>
            <div className='control'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Assistant position={position} />
                </Canvas>
                <div className='btns-cont'>
                    <button onClick={() => handleMove(-2, 0, 0)}>Move Left</button>
                    <button onClick={() => handleMove(2, 0, 0)}>Move Right</button>
                    <button onClick={() => handleMove(0, 2, 0)}>Move Up</button>
                    <button onClick={()=>handleMove(2, 0, 2)}>Move Down</button>
                </div>
            </div>
        </>

    );
}

export default Scene;