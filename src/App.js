import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "nkengekge",
      day: "gegegege",
      reminder: true,
    },
    {
      id: 2,
      text: "hrhrhrhrhr",
      day: "gegehrhrgege",
      reminder: true,
    },
    {
      id: 3,
      text: "nkenhrhrhrgekge",
      day: "gegehrhrgege",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
