import { memo, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import ContactShadow from './experiences/ContactShadow';
import { Canvas } from '@react-three/fiber';
import { button, useControls } from 'leva';

const UI = () => {
  const { setColor } = useTheme();

  useControls({
    changeColorToRed: button(() => setColor('red')),
    changeColorToGreen: button(() => setColor('green')),
    changeColorToBlue: button(() => setColor('blue'))
  })
}

const Cube = memo((props) => {
  console.log('Cube Rendered')
  const { color } = useTheme();
  const refCube = useRef();

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  )

  useControls({
    cubeRotation: button(() => refCube.current.rotation.y += Math.PI / 4)
  })

  useEffect(() => {
    const colorPosition = {
      white: [0, 0, 0],
      red: [-1, 0, 0],
      green: [1, 0, 0],
      blue: [0, 1, 0]
    };

    const position = colorPosition[color];

    refCube.current.position.set(...position);

    const interval = setInterval(() => {
      refCube.current.rotation.y += Math.PI / 4
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [color])

  return (
    <mesh {...props} ref={refCube} >
      <boxGeometry />
      {material}
    </mesh>
  )
});

function App() {
  const [count, setCount] = useState(0);
  const onCubeClicked = useCallback(() => {
    console.log(`Cube clicked ${count} time${count > 1 ? 's' : ''}`);
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <ThemeProvider>
      <UI />
        <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
          <OrbitControls />
          <Cube rotation-y={Math.PI / 4} onClick={onCubeClicked} />
          <ContactShadow />
          <Environment preset='city' />
        </Canvas>
      </ThemeProvider>
    </>
  )
}

export default App
