// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

// export const Demo = () => {
//   const { store, actions } = useContext(Context);

//   return (
//     <div className="container">
//       {/* <ul className="list-group">
//         {store.demo.map((item, index) => {
//           return (
//             <li
//               key={index}
//               className="list-group-item d-flex justify-content-between"
//               style={{ background: item.background }}
//             >
//               <Link to={"/single/" + index}>
//                 <span>Link to: {item.title}</span>
//               </Link>
//               {
//                 // Conditional render example
//                 // Check to see if the background is orange, if so, display the message
//                 item.background === "orange" ? (
//                   <p style={{ color: item.initial }}>
//                     Check store/flux.js scroll to the actions to see the code
//                     ---- SECOND PAGE
//                   </p>
//                 ) : null
//               }
//               <button
//                 className="btn btn-success"
//                 onClick={() => actions.changeColor(index, "orange")}
//               >
//                 Change Color
//               </button>
//             </li>
//           );
//         })}
//       </ul> */}
//       <br />
//       <Link to="/home">
//         <button className="btn btn-primary">Back home</button>
//       </Link>
//     </div>
//   );
// };
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/todo.css";

export const Todo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="Title text-center">Todo List</h1>

      <div className="conatiner-flex text-center ms-3">
        <div className="Task text-center ">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-8">
              <form>
                <input
                  className="text-center form-control"
                  placeholder="No tasks, add a task!"
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      actions.addTodoListItem(e.target.value);
                    }
                  }}
                  //   value={input}
                ></input>
              </form>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-8">
              <ul className="list-group ">
                {store.todoListItems.map((item, index) => (
                  <li className="list-group-item rounded" key={index}>
                    <span className="float-start items-style">{item}</span>

                    <span
                      className="float-end text-danger"
                      onClick={() => {
                        actions.deleteTodoListItem(index);
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </span>
                  </li>
                ))}

                <div className="itemFilter rounded">
                  <h2>{store.todoListItems.length} item/s left...</h2>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Link to="/home">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
