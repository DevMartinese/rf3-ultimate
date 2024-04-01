import { Environment, OrbitControls } from '@react-three/drei';
import ContactShadow from './experiences/ContactShadow';
import { Canvas, useThree } from '@react-three/fiber';

const Cube = (props) => {
  const { camera } = useThree();

  return (
    <mesh {...props} >
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
