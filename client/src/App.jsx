// import canvas
import Canvas from "./canvas";
// import pages
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in motion-reduce:transition-none">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
