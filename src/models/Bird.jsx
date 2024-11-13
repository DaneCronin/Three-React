import React from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
    // extract bird asset and animations
    const  {scene, animations } =useGLTF(birdScene);


  return (
    // Always need a mesh and can set the position and scale of object in the mesh
   <mesh position={[10, 2, 1]} scale = {[0.003, 0.003, 0.003]}>
    <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
