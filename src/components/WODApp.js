import React, { useState } from "react";
import uuid from "uuid";
import Header from "./Header";
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"

import "../../src/App.css";


// plocka från localStorage här
const initialState = [
  {
    
  }
]


function WODApp() {

  const [optionList, setOptionList] = useState(initialState)

  // gör funktionen här upp till addoptions... 

  const createOption = (input) => {
    setOptionList([...optionList, { title: input, id: uuid() }])
  }

  const removeOption = (id) => {
    setOptionList(optionList.filter(t => t.id !== id))
  }
  

  return (
    <div>
      <Header />
      <Action />
      <AddOption onClickFunc={createOption} />
      <Options 
        list={optionList} 
        onClick={removeOption}
      />

      
    </div>
  );
}

export default WODApp;