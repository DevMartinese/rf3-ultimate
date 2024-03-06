import { SpotLight, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from 'three';

const SpotLights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.SpotLightHelper, 'red');

  const { color, distance, attenuation, angle, anglePower } = useControls({
    color: '#876ae5',
    distance: 6,
    attenuation: 2.2,
    angle: 1,
    anglePower: 1
  })

  return (
    <>
      <SpotLight
        ref={ref}
        color={color}
        distance={distance}
        attenuation={attenuation}
        angle={angle}
        anglePower={anglePower}
      />
    </>
  )
}

export default SpotLights;