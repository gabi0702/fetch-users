import { React, useState } from "react";
import "../App.css";

const NewUserForm = (props) => {
  const data = props.data;
  const setData = props.setData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function addNew() {
    // var num = data.length + 1;
    // console.log({ num });
    // console.log({ name });
    // console.log({ email });
    var dt = [{ id: data.length + 1, name: { name }, email: { email } }];
    setData([...data, dt]);
    console.log(dt);
  }

  return (
    <div>
      <form onSubmit={addNew}>
        <label htmlFor="name" id="lab">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter the name"
          id="name"
          name="userName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" id="lab">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter the email"
          id="email"
          name="userEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit-btn1" onClick={addNew}>
          + Add New Data
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;
