import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    // Declare sky variable and pass in skyScene in useGLTF
    const sky = useGLTF(skyScene)
  return (
    <mesh>
            {/* Declare skyScene as an object within a primitive */}
            <primitive object={sky.scene}/>

    </mesh>
  )
}

export default Sky;

