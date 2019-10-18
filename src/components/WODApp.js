import React, { useState } from "react";
import Header from "./Header";
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"

import "../../src/App.css";

function WODApp() {

  const [optionList, setOptionList] = useState(["Marklyft", "Sova"])

  // gör funktionen här upp till addoptions... 

  const createOption = (input) => {
    setOptionList([...optionList, input])
  }


  return (
    <div>
      <Header />
      <Action />
      <AddOption onClickFunc={createOption} />
      <Options list={optionList} />
    </div>
  );
}

export default WODApp;