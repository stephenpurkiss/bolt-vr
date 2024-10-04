import React from 'react'
import { Plane } from '@react-three/drei'

export function Terrain() {
  return (
    <Plane
      args={[100, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
    >
      <meshStandardMaterial color="#4a8" />
    </Plane>
  )
}