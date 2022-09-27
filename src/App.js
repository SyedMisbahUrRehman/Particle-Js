import "./App.css";
import Particles from "./ParticleBackground";

function App() {
  return (
    <div>
      <Particles/>
      <Title />
    </div>
  );
}

function Title() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Particle JS Integration</h1>
      </div>
    </div>
  );
}

export default App;
