import React, { useState } from 'react';

import Assistant from './components/assistant';
import Button from './components/button';
import { Canvas } from '@react-three/fiber';

function App() {
  const [assistantPosition, setAssistantPosition] = useState({ x: 0, y: 0, z: 0 });
  const [explanation, setExplanation] = useState('');

  // Handle button click
  const handleButtonClick = (position, text) => {
    setAssistantPosition(position);
    setExplanation(text);
  };

  return (
    <div>
      <h1>On-Page Assistant</h1>
      <Canvas>
        <Assistant position={assistantPosition} explanation={explanation} />
        <Button
          position={[-2, 0, 0]}
          text="Button 1"
          onClick={() => handleButtonClick({ x: -2, y: 0, z: 0 }, 'This is Button 1.')}
        />
        <Button
          position={[2, 0, 0]}
          text="Button 2"
          onClick={() => handleButtonClick({ x: 2, y: 0, z: 0 }, 'This is Button 2.')}
        />
      </Canvas>
    </div>
  );
}

export default App;

