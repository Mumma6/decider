import React, {useState} from "react";

const AddOption = (props) => {

  const [input, setInput] = useState("")

  const onChange = (e) => {
    setInput(e.target.value)
  }

  // onclicken från props, ska skicka input till WODAPP
  const addOption = (e) => {
    e.preventDefault()
    if(input.length > 0) {
      props.onClickFunc(input)
      setInput("")
    } else {
      alert("To short. ändra detta dock...")
    }
    
  }


  return (
    <form>
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
          type="submit"
          onClick={addOption}
        >
          Add Option
        </button>
      </div>
    </div>
    </form>
    
  );
};

export default AddOption;
