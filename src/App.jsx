import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import AmbientLight from './experiences/AmbientLight';
import DirectionalLight from './experiences/DirectionalLight';
import PointLight from './experiences/PointLight';
import HemisphereLight from './experiences/HemisphereLight';
import SpotLights from './experiences/SpotLight';

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />

        <SpotLights />

        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial color="white" clearcoat={0.5} reflectivity={0.8} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
