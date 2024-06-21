import { useState } from "react";
import Header from "./Header";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(["Hello world", "FSC"]);

  const handleAddTaskClick = () => {
    setTasks([...tasks, inputValue]);
  };

  return (
    <div>
      <Header>
        <h1>Add a Task</h1>
      </Header>

      <input
        type="text"
        className="input"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="button" onClick={handleAddTaskClick}>
        Add task
      </button>

      <Header>
        <h1>My Tasks</h1>
      </Header>

      <div>
        <ul>
          {tasks.map((task) => {
            return <li key={task}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
