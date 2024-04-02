import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./components/Lighthouse";
import PivotControl from "./experiences/PivotControls";

function App() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <PivotControl>
          <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
        </PivotControl>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
