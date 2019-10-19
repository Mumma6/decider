import React, { useState, Fragment } from "react";
import uuid from "uuid";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

import Modal from "react-modal";

import "../../src/App.css";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#282c34",
    padding: "250px",
    borderRadius: "20px"
  }
};

// plocka från localStorage här
const initialState = [];

function DeciderApp() {
  const [optionList, setOptionList] = useState(initialState);
  const [choosen, setChoosen] = useState("");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  

  const createOption = input => {
    setOptionList([...optionList, { title: input, id: uuid() }]);
  };

  const removeOption = id => {
    setOptionList(optionList.filter(t => t.id !== id));
  };

  const generateOption = () => {
    openModal();
    // Get random num from optionslist length
    let random = Math.floor(Math.random() * optionList.length);

    setChoosen(`${optionList[random].title}`);
  };

  return (
    <Fragment>
      <Header />
      <Action list={optionList} generate={generateOption} />
      <AddOption open={modalOpen} onClickFunc={createOption} />
      <Options list={optionList} onClick={removeOption} />

      <Modal isOpen={modalOpen} onRequestClose={closeModal} style={modalStyle}>
        <h1 style={{ marginBottom: "40px", fontSize: "56px" }}>{choosen}</h1>
        <button className="btn btn-lg btn-success" onClick={closeModal}>
          close
        </button>
      </Modal>
    </Fragment>
  );
}

export default DeciderApp;
