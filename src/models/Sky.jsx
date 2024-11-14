import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/sky.glb'

const Sky = ({isRotating}) => {
    // Declare sky variable and pass in skyScene in useGLTF
    const sky = useGLTF(skyScene)
    const skyRef = useRef();

    //use useFrame function to determine if canvas is rotating then sky should rotate. The "_" is a blank/null value, just need the delta as a second argument
    useFrame ((_, delta) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.15 * delta
        }

    })


  return (
    <mesh ref={skyRef}>
            {/* Declare skyScene as an object within a primitive */}
            <primitive object={sky.scene}/>

    </mesh>
  )
}

export default Sky;

