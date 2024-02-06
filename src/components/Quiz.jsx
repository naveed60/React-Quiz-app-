import { useState } from "react";
import QUESTIONS from "../questuins.js";
import quizIsCompleteImg from "../assets/quiz-complete.png";

export default function Quiz(){
    const [userAnswers, setUsereAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    function handleSelectAnswer(selectedAnswer){
      setUsereAnswers((previousUserAnswers) => {
        return [...previousUserAnswers, selectedAnswer];
      });
    };
    
    if (quizIsComplete){
      return (
        <div id="summary">
        <img src={quizIsCompleteImg} alt="Trophy icon"/>
        <h2>Quiz Completed!</h2>
      </div>
    )
  }
  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);
  return (
 <>
 <div id="quiz">
    <div id="question">
      <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
    </div>
    <ul id="answers">
      {shuffleAnswers.map((answer) =>(
        <li key={answer} className="answer">
          <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>
      ))}

    </ul>
 </div>
</>
  )
}