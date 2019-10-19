import React, { useState } from "react";
import uuid from "uuid";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import Model from "./Model";

import "../../src/App.css";

// plocka från localStorage här
const initialState = [];

function WODApp() {
  const [optionList, setOptionList] = useState(initialState);

  // gör funktionen här upp till addoptions...

  const createOption = input => {
    setOptionList([...optionList, { title: input, id: uuid() }]);
  };

  const removeOption = id => {
    setOptionList(optionList.filter(t => t.id !== id));
  };

  const generateOption = () => {
    // Get random num from optionslist length
    let random = Math.floor(Math.random() * optionList.length);

    alert(`We choose ${optionList[random].title}`);
  };

  return (
    <div>
      <Header />
      <Action list={optionList} generate={generateOption} />
      <AddOption onClickFunc={createOption} />
      <Options list={optionList} onClick={removeOption} />
      <Model />
    </div>
  );
}

export default WODApp;
