import React, {useState} from "react";

const AddOption = (props) => {

  const [input, setInput] = useState("")

  const onChange = (e) => {
    setInput(e.target.value)
  }

  // onclicken från props, ska skicka input till WODAPP
  const addOption = () => {
    if(input.length > 0) {
      props.onClickFunc(input)
    } else {
      alert("To short. ändra detta dock...")
    }
    
  }


  return (
    <div className="add-input input-group mb-3">
      <input
        name="input"
        value={input}
        onChange={onChange}
        type="text"
        className="form-control"
        placeholder="Enter option..."
        
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addOption}
        >
          Add Option
        </button>
      </div>
    </div>
  );
};

export default AddOption;
