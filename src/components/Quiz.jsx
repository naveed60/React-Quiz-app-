import { useState } from "react";
import QUESTIONS from "../questuins.js";

export default function Quiz(){
    const [userAnswers, setUsereAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
   function handleSelectAnswer(selectedAnswer){
    setUsereAnswers((previousUserAnswers) => {
      return [...previousUserAnswers, selectedAnswer];
    });
   };
  return (
 <>
 <div id="quiz">
    <div id="question">
      <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
    </div>
    <ul id="answers">
      {QUESTIONS[activeQuestionIndex].answers.map((answer) =>(
        <li key={answer} className="answer">
          <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>
      ))}

    </ul>
 </div>
</>
  )
}