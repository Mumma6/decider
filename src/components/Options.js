import React from "react";


const Options = props => {
  return (
    <div>
      <ul className="list-group">
        {props.list.map((item, id) => (
          <li key={id} className="list-group-item list-group-item-dark">
            {item.title}
            <button style={{float: "right"}} className="btn btn-sm btn-danger" onClick={() => props.onClick(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
