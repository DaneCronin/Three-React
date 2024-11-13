import React, {useEffect, useRef} from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'


// ...props passes in all the other properties defined and spreads them in setting plane size and position
const Plane = (isRotating, ...props) => {
    const ref = useRef();

    const  {scene, animations } = useGLTF(planeScene);
  return (
  <mesh {...props} ref={ref}>
    <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
