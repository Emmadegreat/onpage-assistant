import '../index.css'

import React, { useState } from 'react';

import Assistant from './assistant';
import { Canvas } from 'react-three-fiber';

const Scene = () => {

    const [position, setPosition] = useState([0, 0, 0]);
    const [bgColor, setBgColor] = useState("#fff")

    const handleMove = (x, y, z,color) => {
        setPosition([x, y, z]);
        setBgColor(color);
    };



    return (
        <>
            <div className='control' style={{ backgroundColor: bgColor, height: '70vh' }}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Assistant position={position} />
                </Canvas>
                <div className='btns-cont'>
                    <button onClick={() => handleMove(-10, 0, 0, "rgb(209, 105, 105)")}> Left</button>
                    <button onClick={() => handleMove(10, 0, 0, "rgb(65, 182, 87)")}> Right </button>
                    <button onClick={() => handleMove(0, 3, 0, "rgb(236, 207, 63)")}> Up </button>
                    <button onClick={()=>handleMove(0, -3, 0, "rgb(56, 53, 225)")}> Down</button>
                </div>

            </div>
        </>

    );
}

export default Scene;