import Greeting from "./components/Greeting.tsx";
import Info from "./components/Info.tsx";

function App() {
  return (
    <div>
      <Greeting name="Marko" />
      <Info title="My school" text="I go to HTL Dornbirn." />
      <Info title="My hobby" text="I enjoy playing football." />
    </div>
  );
}

export default App;