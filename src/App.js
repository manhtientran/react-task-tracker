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

  // Delete Task
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Hello" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
