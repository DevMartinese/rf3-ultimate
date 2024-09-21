import { ContactShadows, Environment } from '@react-three/drei';
import { MoveableSphere } from './MoveableSphere';

export const Experience = () => {
  return (
    <>
      <MoveableSphere position-z={-5} scale={3} />
      <MoveableSphere />
      <MoveableSphere position-x={2} />
      <MoveableSphere position-x={-2} />

      <ContactShadows
        rotation={Math.PI / 2}
        position={[0, -1.6, 0]}
        opacity={0.42}
      />

      <Environment preset='sunset' />
    </>
  )
}