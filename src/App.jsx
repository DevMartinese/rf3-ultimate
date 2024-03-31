import { BakeShadows, ContactShadows, OrbitControls, SoftShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import ShadowCamera from './experiences/ShadowCamera';
import ContactShadow from './experiences/ContactShadow';
import AccumulativeShadow from './experiences/AccumulativeShadow';

function App() {

  const { cubeInAir } = useControls({
    cubeInAir: false
  })

  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }} shadows>
        <AccumulativeShadow />

        <OrbitControls />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
          //shadow-mapSize={[64, 64]} = Map Shadow
        />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color={'red'}
          castShadow
        />

        <mesh position={[1, 1, 1]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-y={Math.PI / 4} castShadow receiveShadow position-y={cubeInAir ? 1 : 0}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
