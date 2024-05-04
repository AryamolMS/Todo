import React from "react";

function ViewTodo({item}) {
  console.log(item);
  return (
    <>
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
        {item.map((i)=>(<div className="pt-5 ms-5">
          <h6 className="ms-5">{i.title}</h6>
          <div className="input-group ms-5">
          <span className="form-control w-50">{i.description}</span>
            <span className="input-group-text">
              <i className="fa-solid fa-trash text-danger"></i>
            </span>
            <span className="input-group-text">
              <i className="fa-solid fa-star text-secondary"></i>
            </span>
            <span className="input-group-text">
              <i className="fa-solid fa-check"></i>
            </span>
          </div>
        </div>))
          
        }
      </div>
    </>
  );
}

export default ViewTodo;
