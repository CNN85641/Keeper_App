import React, { useState } from "react";

function CreateArea(props) {
  const [noteinput, setNoteinput] = useState({
    title: "",
    contn: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    //console.log(value);

    setNoteinput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitButton(event) {
    //console.log(noteinput);
    props.onAdd(noteinput);
    setNoteinput({
      title: "",
      contn: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteinput.title}
        />
        <textarea
          name="contn"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={noteinput.contn}
        />
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
