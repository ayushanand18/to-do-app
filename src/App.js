import './App.css';
import Todos from "./components/to-dos";
import Head from "./components/header"
import Add from "./components/add";

function App() {
  return (
    <div className="App">
      <Head />
      <Add />
      <Todos />
    </div>
  );
}

export default App;
