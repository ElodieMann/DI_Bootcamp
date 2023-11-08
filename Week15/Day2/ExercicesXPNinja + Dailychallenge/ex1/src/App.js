import React, { createContext, useContext, useReducer, useState } from "react";

// Context for managing tasks
const TaskContext = createContext();

// Actions
const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const EDIT_TASK = "EDIT_TASK";
const FILTER_TASKS = "FILTER_TASKS";

// Reducer function
function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: action.text, completed: false };
      return [...state, newTask];
    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: true } : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
      case FILTER_TASKS:
        if (action.filter === "all") {
          return state;
        } else if (action.filter === "completed") {
          return state.filter((task) => task.completed);
        } else if (action.filter === "active") {
          return state.filter((task) => !task.completed);
        }
        return state;
  }
}





function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

function TaskAdder() {
  const { dispatch } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: ADD_TASK, text: taskText });
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleCompleteTask = (id) => {
    dispatch({ type: COMPLETE_TASK, id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: REMOVE_TASK, id });
  };

  const handleEditTask = (id, text) => {
    setEditId(id);
    setEditedText(text);
  };

  const handleSaveEdit = () => {
    dispatch({ type: EDIT_TASK, id: editId, text: editedText });
    setEditId(null);
    setEditedText("");
  };

  const handleFilterTasks = (filter) => {
    dispatch({ type: FILTER_TASKS, filter });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task.id)}
                />
                {task.text}
                <button onClick={() => handleRemoveTask(task.id)}>
                  Remove
                </button>
                <button onClick={() => handleEditTask(task.id, task.text)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleFilterTasks("all")}>All</button>
        <button onClick={() => handleFilterTasks("completed")}>
          Completed
        </button>
        <button onClick={() => handleFilterTasks("active")}>Active</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <h1>Gestionnaire de tâches</h1>
        <TaskAdder />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
