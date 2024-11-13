import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';


{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
Popp Up

</div> */}


const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -6.5 , -43];
    //define rotation
    let rotation = [0.1, 4.7, 0];

    if(window.innerwidth <768) {
      screenScale = [0.9, 0.9, 0.9];
      
    } else {
      screenScale = [1, 1, 1];
    }
//Pass in variables 
     return [screenScale, screenPosition, rotation];

  }
// Call AdjustIslandScreenSize function above with properties of scale, position and rotation
const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className = "w-full h-screen relative">
        <Canvas className="w-full h-screen bg-transparent" 
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



            {/* Adding in Sky.jsx */}
            <Sky/>


          <Island 
          //Pass in props for island scale and position
          position= {islandPosition}
          scale = {islandScale}
          rotation={islandRotation}
          />

          </Suspense>

        </Canvas>

    </section>
  )
}

export default Home;
