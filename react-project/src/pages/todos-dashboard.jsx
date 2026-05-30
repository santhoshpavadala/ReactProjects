import { useEffect, useState } from "react";
import { getTodos } from "../services/todo-service";

function TodosDashboard() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {

    const response = await getTodos();

    setTodos(response.data);
  };

  return (
    <>
      <h1 className="page-title">
        Todos Dashboard
      </h1>

      <div className="card-grid">

        {todos.slice(0, 20).map((todo) => (
          <div
            key={todo.id}
            className="dashboard-card"
          >
            <h3>{todo.title}</h3>

            <p>
              Status:
              {
                todo.completed
                  ? " Completed"
                  : " Pending"
              }
            </p>
          </div>
        ))}

      </div>
    </>
  );
}

export default TodosDashboard;