import React, { useState, useEffect } from "react";

const Action = props => {
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    if (props.list.length < 2) {
      setToggleBtn(true);
    } else {
      setToggleBtn(false)
    }
  }, [props.list.length]);

  const generateOption = () => {
    props.generate();
  };

  return (
    <div>
      <button
        disabled={toggleBtn}
        onClick={generateOption}
        type="button"
        className="action-btn btn btn-info btn-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Action;
