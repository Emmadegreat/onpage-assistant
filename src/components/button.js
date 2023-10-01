import React from 'react';
import { useFrame } from '@react-three/fiber';

function Button({ position, text, onClick }) {
  return (
    <mesh
      position={position}
      onClick={onClick}
    >
      <boxGeometry args={[1, 1, 0.1]} />
      <meshBasicMaterial color="blue" />
      <textMesh position={[0, 0, 0.1]}>{text}</textMesh>
    </mesh>
  );
}

export default Button;
