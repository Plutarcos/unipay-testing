import React from "react";

import "./criptocurrencys.css";

const DoubtOptions = (props) => {
  const options = [
    { text: "O que são Criptomoedas?", handler: props.actionProvider.criptoInfo, id: 1 },
    { text: "Como funcionam?", handler: props.actionProvider.criptoWorks, id: 2 },
    { text: "Quando surgiram?", handler: props.actionProvider.criptoBorn, id: 3 },
    { text: "Como investir?", handler: props.actionProvider.criptoHow, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="doubt-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="doubt-options-container">{optionsMarkup}</div>;
};

export default DoubtOptions;