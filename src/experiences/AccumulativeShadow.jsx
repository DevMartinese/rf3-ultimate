import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const AccumulativeShadow = () => (
  <AccumulativeShadows
    temporal
    frames={35}
    alphaTest={0.85}
    scale={5}
    position={[0, -0.499, 0]}
    color={"#EFBD4E"}
  >
    <RandomizedLight
      amount={4}
      radius={9}
      intensity={0.55}
      ambient={0.25}
      position={[5, 5, -10]}
    />
    <RandomizedLight
      amount={4}
      radius={9}
      intensity={0.25}
      ambient={0.55}
      position={[-5, 5, -9]}
    />
  </AccumulativeShadows>
)

export default AccumulativeShadow;