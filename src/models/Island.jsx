
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/island.glb';


const Island = ({isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef();

    const {gl, viewport} = useThree(); 
  const { nodes, materials } = useGLTF(islandScene)

//   Use a ref to get the last mouse position
const lastX = useRef(0);
const rotationSpeed= useRef(0);
const dampingFactor=0.95;

// Function for when you press click mouse down, get event (e)
const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    //need to find if its a touch event on a phone or mouse event, if it is a touch event then e.touchs 0, else event.clientX
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    //store last position of the X 
    lastX.current = clientX;

};

// Function for when you press click mouse UP, get event (e)
const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

};

// Function for when you press click mouse and move it, get event (e)
const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) { //Determine if touch event or mouse click
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    
        //calculate the change in the horizontal position
        const delta = (clientX - lastX.current)/viewport.width;
    
        //update the Island's rotation based on the mouse *Math.PI because it is circular
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    
        //Save Island rotation and update based on new position and moused movement speed
        lastX.current =clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
    }
   
};

//Function to handle movement with keyboard arrow keys- if you hit arrow key left and the island is not rotating, setIsRotating to true and set islandRef rotation.  Else, if arrow is right, do the same thing but in reverse with -0.01 
const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
        if(!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(true);
        islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
};


//Function to handle movement with keyboard arrow keys UP- if key is equal to arrow key left OR arrow key right set isRotating to FALSE; 
const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(false);   
    } 
};



// Hook called useFrame to accept callback function to put all functions to use and will apply on every single frame
useFrame (() => {
    if(!isRotating) {
        //rotation will get slower and slower 
        rotationSpeed.current *= dampingFactor;

        // then completely stop rotation if rotion speed is lower than or equal to 0.001 then set speed to 0
        if(Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current =0;
        }
//slows down Island rotation
        islandRef.current.rotation.y += rotationSpeed.current
    } else {
        //if it is rotating
        const rotation = islandRef.current.rotation.y;
          /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
    }
});

//Create new useEffect with a callback function to use all of the functions handling mouse position and movement that will happen whenever one of the variables in the dependcy rate changes.
useEffect(() => {
// attach mouse and keyboard movements to a canvas, to touch just the canvas not just the normal DOM
const canvas = gl.domElement;

    //need to add event listeners at the start for all pointer movements- this is adding events 
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerUp', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    //this is removing the click events from the canvas
    return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerUp', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);

    }


},  [gl, handlePointerDown, handlePointerUp, handlePointerMove]);



  return (
    <a.group ref={islandRef} {...props}  >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}

export default Island;