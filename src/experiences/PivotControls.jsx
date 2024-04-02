import { PivotControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

const PivotControl = ({ children }) => {

  const ref = useRef();

  const displayItemNewPosition = () => {
    const newPosition = new THREE.Vector3();
    ref.current.getWorldPosition(newPosition);
    console.log("new position: ", newPosition);

    const newRotation = new THREE.Euler();
    ref.current.getWorldQuaternion(newRotation);
    console.log("new rotation: ", newRotation);
  }

  return (
    <PivotControls depthTest={false} onDragEnd={displayItemNewPosition}>
      <group ref={ref}>
        {children}
      </group>
    </PivotControls>
  )
}

export default PivotControl;