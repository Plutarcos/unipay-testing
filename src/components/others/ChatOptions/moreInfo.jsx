import React from "react";

import "./criptocurrencys.css";

const DoubtOptions = (props) => {
  const options = [
    { text: "Quero saber mais", handler: props.actionProvider.moreInfo, id: 1 },
    { text: "Até mais", handler: props.actionProvider.byeBye, id: 2 },
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