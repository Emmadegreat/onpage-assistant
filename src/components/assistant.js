import '../index.css'

import React, {useRef} from 'react';

import { useFrame } from 'react-three-fiber';

const Assistant = ({position}) => {
    const mesh = useRef();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });


    return (
        <>
            <mesh position={position} ref={mesh}>
                <boxGeometry args={[1, 2, 0.5]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </>
    );
}

export default Assistant;