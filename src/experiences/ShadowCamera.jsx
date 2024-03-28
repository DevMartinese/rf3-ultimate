const ShadowCamera = () => (
  <directionalLight
    position={[5, 5, 5]}
    intensity={0.5}
    castShadow
  /*
  shadow-camera-far={50}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
  En caso de que no usemos esto podemos usar ortographicCamera 
  con los atributos attach y args
  */
  >
    <orthographicCamera
      attach="shadow-camera"
      args={[-10, 10, 10, -10]}
    />
  </directionalLight>
)

export default ShadowCamera;