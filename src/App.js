//================================1================================================
import { useState } from "react";
import "./CounterCard.css";

function CounterCard() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="counter-card">
      <h2>Counter: {count}</h2>
      <button onClick={handleButtonClick}>Increment by 3</button>
    </div>
  );
}
export default CounterCard;

//=========================================================3=====================
// import React ,{useEffect, useState} from 'react'
// import axios from 'axios'

// function ApiData() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get('https://gorest.co.in/public/v1/todos')
//       .then(response => {
//         setTodos(response.data.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const renderTodos = () => {
//     return todos.map(todo => {
//       return (
//         <div key={todo.id} className="col-md-4">
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h5>{todo.title}</h5>
//               <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="container">
//       <h1 className="my-5">Todos</h1>
//       <div className="row">
//         {renderTodos()}
//       </div>
//     </div>
//   );
// }
// export default ApiData

//=======================================4==============================

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function ContactForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmit = (data) => {
//     axios.post("https://admin.srkprojects.com/web/api/client/v1/contact-us/", data)
//       .then(response => {
//         setSuccessMessage("Message sent successfully!");
//         setErrorMessage("");
//       })
//       .catch(error => {
//         setSuccessMessage("");
//         setErrorMessage("Failed to send message. Please try again later.");
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email:</label>
//         <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
//         {errors.email?.type === "required" && <span>This field is required</span>}
//         {errors.email?.type === "pattern" && <span>Please enter a valid email address</span>}
//       </div>
//       <div>
//         <label>Name:</label>
//         <input type="text" {...register("name", { required: true })} />
//         {errors.name?.type === "required" && <span>This field is required</span>}
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea {...register("message", { required: true })} />
//         {errors.message?.type === "required" && <span>This field is required</span>}
//       </div>
//       <div>
//         <button type="submit">Send</button>
//       </div>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//     </form>
//   );
// }

// export default ContactForm
