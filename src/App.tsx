import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Terrain } from './components/Terrain'
import { Trees } from './components/Trees'
import { Character } from './components/Character'

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Stars />
        <Terrain />
        <Trees />
        <Character />
      </Canvas>
    </div>
  )
}

export default App