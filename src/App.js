import "./style/style.css";
import Sheep from "./components/Sheep";
import KeyBoard from "./components/KeyBoard";
import Counter from "./provider/Counter";

function App() {
  return (
    <main>
      <Counter>
        <Sheep />
        <KeyBoard />
      </Counter>
    </main>
  );
}

export default App;
