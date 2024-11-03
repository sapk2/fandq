import React from 'react'
import Accordion from './Accordion';
import '../Accordion.css'
 function FAQ() {
    const faqdata=[
        { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How does useState work?", answer: "useState is a hook that lets you add state to functional components." },
    { question: "What is JSX?", answer: "JSX is a syntax extension that looks similar to HTML and can be used with React to describe UI." }, 
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How does useState work?", answer: "useState is a hook that lets you add state to functional components." },
    { question: "What is JSX?", answer: "JSX is a syntax extension that looks similar to HTML and can be used with React to describe UI." },
  
  ];
    
  return (
    
    <div className='faq-section'>
        <h2> Frequently Asked Question</h2>
        {faqdata.map((faq,index)=>(
            <Accordion key={index} question={faq.question} answer={faq.answer}/>
        ))}
      
    </div>
  )
}
export default FAQ;