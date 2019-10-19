import React from "react";

// se till att inte ptions renderar en tom sak

const Options = props => {
  return (
    <div>
      <ul className="list-group">
        {props.list.map((item, id) => (
          <li key={id} className="list-group-item list-group-item-dark">
            {item.title}
            <button onClick={() => props.onClick(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
