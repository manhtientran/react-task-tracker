import { useState } from "react";

const Tasks = () => {
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
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
