const DirectionalLight = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.5} position={[3, 3, 3]} color="red" />
      <directionalLight intensity={0.5} position={[0, 3, -3]} color="green" />
      <directionalLight intensity={0.5} position={[-3, 3, 3]} color="blue" />
    </>
  )
}

export default DirectionalLight;