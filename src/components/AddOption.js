import React, { useState } from "react";

const AddOption = props => {
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const onChange = e => {
    setInput(e.target.value);
    setErrorMsg(false);
  };

  // onclicken från props, ska skicka input till WODAPP
  const addOption = e => {
    e.preventDefault();
    if (input.length > 0) {
      props.onClickFunc(input);
      setInput("");
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div>
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

      <div className="error-msg">
        {errorMsg && (
          <div>
            <h3 className="alert alert-danger" role="alert">
              Plese enter a option
              <button
                onClick={() => setErrorMsg(false)}
                className="dismiss-btn btn btn-sm btn-info"
              >
                Dismiss
              </button>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddOption;
