import React, { useState } from 'react';
import '../Accordion.css';

function Accordion({ question, answer }) {
  const [open, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!open);
  };

  return (
    <div className="container">
      <div className="accordion-item">
        <button className="accordion-question" onClick={toggleAccordion}>
          {open ? "-" : "+"} {question}
        </button>
        {open && <div className="accordion-answer">{answer}</div>}
      </div>
    </div>
  );
}

export default Accordion;
