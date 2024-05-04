import React, { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  console.log(data);

  const [todos,setTodos] = useState([])

  const handleAdd = () => {
    const { title, description } = data;
    if (!title || !description) {
      alert("Please fill this form");
    } else {
      const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const newTodo = { id: Date.now(), ...data }; 
      existingTodos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(existingTodos));
      setData({
        title: "",
        description: "",
      });
      setTodos(existingTodos); 
      alert("Todo added successfully!");
    }
  };
  

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const handleFavorite = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, favorite: !todo.favorite };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, [data]);

  return (
    <>
      <div className="mt-5 pt-5">
        <Container>
          <Row
            className="Card shadow p-5"
            style={{ width: "100%", height: "auto" }}
          >
            <Col md={6} className="text-center">
              <h4 className="addtodo">Add Your Todo Here</h4>
              <p className="ms-5 pt-3">
                "Welcome to your productive space! Stay focused and organized
                with today's to-dos. Prioritize tasks, tackle them one by one,
                and feel accomplished. Let's make today a day of progress and
                achievement!"
              </p>
              <div className="pt-5">
                <input
                  type="text"
                  className="w-100 input1"
                  placeholder="Title"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div className="pt-4">
                <input
                  type="text"
                  className="w-100 input1"
                  placeholder="Description"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
              </div>
              <div className="pt-5">
                <button className="btn btn-primary w-50" onClick={handleAdd}>
                  ADD
                </button>
              </div>
            </Col>
            <Col md={6}>
            <h3 className="text-center mt-3">TODO LIST</h3>
      <div className="pt-4">
        <div className="input-group ms-5">
          <input
            type="text"
            className="form-control w-50 ms-5"
            placeholder="Search here...."
          />
          <button className="btn btn-primary" type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {todos.map((item)=>(<div className="pt-5 ms-5">
          <h6 className="ms-5">{item.title}</h6>
          <div className="input-group ms-5">
          <span className="form-control w-50">{item.description}</span>
            <span className="input-group-text" onClick={()=>handleDelete(item.id)}>
              <i className="fa-solid fa-trash text-danger"></i>
            </span>
            <span
                       className={`input-group-text ${item.favorite ? 'text-warning' : ''}`}
                        onClick={() => handleFavorite(item.id)}
                      >
                        <i className='fa-solid fa-star'></i>
                      </span>
            <span className={`input-group-text ${item.complete?'text-success':''}`} onClick={()=>handleComplete(item.id)}>
            <i class="fa-solid fa-check-double"></i>
            </span>
          </div>
        </div>))
          
        }
      </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
