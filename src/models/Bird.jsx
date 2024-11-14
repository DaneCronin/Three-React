import React, { useRef, useEffect } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    // extract bird asset and animations
    const  {scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    //Start animation by turning on useEffect based on certain actions
    useEffect(() => {
      actions ['Take 001'].play();

    }, []);


//Use useFrame function to make Bird move around 
useFrame(({clock, camera } ) => {
  //update the Y position to simulate the flight moving in a sine wave (up and down)
  birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

  //If statement to check bird's position and move it across on the x-axis and if it has exited the camera then reverse direction 180deg to fly back across
  if(birdRef.current.position.x > camera.position.x + 10) {
    birdRef.current.rotation.y = Math.PI;
  } 
  //if bird position is less than 10, it is still in the screen and the bird needs to move forward
  else if(birdRef.current.position.x < camera.position.x - 10) {
    birdRef.current.rotation.y = 0;
  }

  if(birdRef.current.rotation.y === 0) {
    //If the bird's current position is equal to 0, then move on x-axis 
    birdRef.current.position.x += 0.01;
    birdRef.current.position.z -= 0.01;
  } else  {
    //If the bird's current position is equal to 0, then move on z-axis 
    birdRef.current.position.x -= 0.01;
    birdRef.current.position.z += 0.01;
  }

})
  return (
    // Always need a mesh and can set the position and scale of object in the mesh
   <mesh position={[-5, 2, 1]} scale = {[0.003, 0.003, 0.003]} ref={birdRef}>
    <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
