import { Environment, OrbitControls } from '@react-three/drei';
import ContactShadow from './experiences/ContactShadow';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useRef } from 'react';

const Cube = (props) => {
  const camera  = useThree((state) => state.camera);

  const updateFov = fov => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  };
 
  useControls("FOV", {
    smallFov: button(() => updateFov(20)),
    normalFov: button(() => updateFov(42)),
    bigFov: button(() => updateFov(60)),
    hugeFov: button(() => updateFov(110))
  });

  const ref = useRef();

  const { speed } = useControls("SPEED", {
    speed: {
      value: 0,
      min: -12,
      max: 12
    }
  })

  useFrame((_state, delta) => {
    ref.current.rotation.y += speed * delta
  });

  return (
    <mesh {...props} ref={ref} >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
        <OrbitControls />
        <Cube rotation-y={Math.PI / 4} />
        <ContactShadow />
        <Environment preset='city' />
      </Canvas>
    </>
  )
}

export default App
