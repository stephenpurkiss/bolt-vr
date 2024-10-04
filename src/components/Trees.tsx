import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Cone } from '@react-three/drei'

function Tree({ position }: { position: [number, number, number] }) {
  const treeRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={treeRef} position={position}>
      <Cylinder args={[0.2, 0.2, 1, 8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cone args={[1, 2, 8]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#228B22" />
      </Cone>
    </group>
  )
}

export function Trees() {
  return (
    <>
      <Tree position={[-5, 0, -5]} />
      <Tree position={[5, 0, -5]} />
      <Tree position={[0, 0, 5]} />
    </>
  )
}