import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

export function Character() {
  const characterRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (characterRef.current) {
      characterRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5 + 1.5
    }
  })

  return (
    <Sphere ref={characterRef} args={[0.5, 32, 32]} position={[0, 1.5, 0]}>
      <meshStandardMaterial color="#FF69B4" />
    </Sphere>
  )
}