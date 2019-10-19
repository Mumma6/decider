import React, { useState } from "react";

const Action = props => {
  const [errorMsg1, setErrorMsg1] = useState(false);
  const [errorMsg2, setErrorMsg2] = useState(false);

  let errorText1 = "Please add options";
  const errorText2 = "Atleast two options is needed";

  const generateOption = () => {
    if (props.list.length === 0) {
      setErrorMsg1(true);
    } else if (props.list.length < 2) {
      setErrorMsg2(true);
    } else {
      props.generate()
    }
  };

  return (
    <div>
      <button
        onClick={generateOption}
        type="button"
        className="action-btn btn btn-info btn-lg"
      >
        Generate
      </button>

      <div className="error-msg">
        {errorMsg1 && (
          <div>
            <h3 className="alert alert-danger" role="alert">
              {errorText1}
              <button
                onClick={() => setErrorMsg1(false)}
                className="dismiss-btn btn btn-sm btn-info"
              >
                Dismiss
              </button>
            </h3>
          </div>
        )}
      </div>

      <div className="error-msg">
        {errorMsg2 && (
          <div>
            <h3 className="alert alert-danger" role="alert">
              {errorText2}
              <button
                onClick={() => setErrorMsg2(false)}
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

export default Action;
