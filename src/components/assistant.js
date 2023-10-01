import React from 'react';

function Assistant({ position, explanation }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.5, 0.1]} />
      <meshBasicMaterial color="red" />
      <textMesh position={[0, 0, 0.1]}>{explanation}</textMesh>
    </mesh>
  );
}

export default Assistant;
