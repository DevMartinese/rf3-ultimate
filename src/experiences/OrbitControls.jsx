import { OrbitControls } from '@react-three/drei';

const OrbitControl = () => (
  <OrbitControls
    enablePan={false}
    maxPolarAngle={Math.PI / 2}
    minAzimuthAngle={Math.PI / 2}
    maxAzimuthAngle={Math.PI / 2}
    minDistance={3}
    maxDistance={10} />
)

export default OrbitControl;