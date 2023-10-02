import '../index.css'

import React, { useState } from 'react';

import Assistant from './assistant';
import { Canvas } from 'react-three-fiber';

const Scene = () => {

    const [position, setPosition] = useState([0, 0, 0]);
    const [bgColor, setBgColor] = useState("rgb(63, 61, 61)")

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
                    <button onClick={() => handleMove(-2, 0, 0, "red")}>Move Left (Red)</button>
                    <button onClick={() => handleMove(2, 0, 0, "blue")}>Move Right (Blue)</button>
                    <button onClick={() => handleMove(0, 2, 0, "green")}>Move Up (Green)</button>
                    <button onClick={()=>handleMove(2, 0, 2, "white")}>Move Down</button>
                </div>

            </div>
        </>

    );
}

export default Scene;