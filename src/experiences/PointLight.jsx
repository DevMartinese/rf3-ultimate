import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';

const PointLight = () => {

  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, 'red');
  const { color, distance, decay, intensity } = useControls({
    color: '#ff0000',
    distance: 3,
    decay: 2,
    intensity: 0.5
  });

  return (
    <>
      <pointLight ref={ref} position={[1, 1, 1]} intensity={intensity} distance={distance} decay={decay} color={color} />
    </>
  )
}

export default PointLight;