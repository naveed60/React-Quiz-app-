import { useState } from "react";
import QUESTIONS from "../questuins.js";

export default function Quiz(){
    const [userAnswers, setUsereAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
        return ( <p>Active question</p>
    )
}