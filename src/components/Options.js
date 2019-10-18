import React from "react";

const Options = props => {
  return (
    <div>
      <ul className="list-group">
        {props.list.map(item => 
           (
            <li className="list-group-item list-group-item-dark">{item}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Options;
