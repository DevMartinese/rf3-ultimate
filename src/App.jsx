import { Canvas } from '@react-three/fiber'
import { City } from './components/City';
import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <OrthographicCamera
        position={[1, 1, 1]}
        makeDefault
        top={2}
        bottom={-2}
        left={-2 * (window.innerWidth /window.innerHeight)}
        right={2 * (window.innerWidth /window.innerHeight)}
        near={-5}
      />
      <OrbitControls />
      <City />
      <Environment preset='city' />
    </Canvas>
  )
}

export default App
