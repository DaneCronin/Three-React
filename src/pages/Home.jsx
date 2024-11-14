import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';


{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
Popp Up

</div> */}


const Home = () => {
  // New useState to handle rotation of the island
  const [ isRotating, setIsRotating] = useState(false);
  //New useSate to handle setCurrentStage of positions of Island Rotation
  const [currentStage, setCurrentStage] = useState(1);



  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    //define rotation
    let rotation = [0.1, 4.7, 0];

    if(window.innerwidth <768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
//Pass in variables 
     return [screenScale, screenPosition, rotation];

  };

// Function to adjust plane postioning and scale for screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
   
    if (window.innerwidth <768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
      
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
//Pass in variables 
     return [screenScale, screenPosition];

  };


// Call AdjustIslandScreenSize function above with properties of scale, position and rotation
const [islandScale, islandPosition] = adjustIslandForScreenSize();

const [planeScale, planePosition] = adjustPlaneForScreenSize();


  return (
    <section className = "w-full h-screen relative">

      {/* Pop UP to show at different stage intervals */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {/* Check current stage and display HomeInfo.jsx with all props */}
        {currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>


      {/* Curly brackets and back ticks to make className dynamic to handle cursor grabbing */}
        <Canvas className={`w-full h-screen bg-transparent" ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}>
          <Suspense fallback={<Loader/>}>
          {/* Directional light simulates light from distant source */}
          <directionalLight position ={[1, 1, 1,]} intensity={2}/>
          {/* Ambient illuminates all objects equally without shadows */}
          <ambientLight intensity={0.5}/>
          {/* Point light emmits light in all directions from single point - not needed in outdoor scene*/}
          <pointLight/>
          {/* Similar to Point light emmiting light in single direction but in shape of cone */}
          <spotLight/>
          {/* Hemisphere illuminates scene with a gradient */}
          <hemisphereLight skyColor='#b1eff' groundColor='#000' intensity={1}/>



      

            {/* Adding Bird  */}
           <Bird/>

            {/* Adding in Sky.jsx */}
            <Sky
            isRotating={isRotating}
            />


          <Island 
          //Pass in props for island scale and position
          position= {islandPosition}
          scale = {islandScale}
          rotation = {[0.1, 4.7077, 0]}
          // Pass isRotating to rotate island with cursor grab
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          />

{/* Need to pass in the props of scale and position into Plane  */}
            <Plane
            scale={planeScale}
           position={planePosition}
            isRotating={isRotating}
            rotation={[0,20.1,0]}
              />

          </Suspense>

        </Canvas>

    </section>
  )
}

export default Home;
