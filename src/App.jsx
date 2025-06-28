import React, { useState, useEffect } from "react";
import { generateQuizData } from "./data/quizData";
import ScoreCounter from "./components/ScoreCounter";
import QuizCard from "./components/QuizCard";

export default function App() {
  const [quizItems, setQuizItems] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [scoreAnim, setScoreAnim] = useState("");
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("fashionQuizHighScore");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    const allQuizData = generateQuizData();
    setQuizItems(allQuizData);
    if (allQuizData.length > 0) {
      setCurrentQuiz(allQuizData[Math.floor(Math.random() * allQuizData.length)]);
    }
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("fashionQuizHighScore", score);
    }
  }, [score, highScore]);

  const nextRandomQuiz = () => {
    if (quizItems.length > 0) {
      setCurrentQuiz(quizItems[Math.floor(Math.random() * quizItems.length)]);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setScoreAnim("correct");
      setTimeout(() => setScoreAnim(""), 600);
      nextRandomQuiz();
    } else {
      setScore(0);
      setScoreAnim("incorrect");
      setTimeout(() => setScoreAnim(""), 600);
      nextRandomQuiz();
    }
  };

  return (
    <>
      <ScoreCounter score={score} anim={scoreAnim} />
      <div style={{ position: "fixed", top: 60, left: 20, background: "rgba(255,255,255,0.95)", borderRadius: 20, padding: "6px 18px", fontWeight: 500, fontSize: "1rem", zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        Highest Score: {highScore}
      </div>
      <div className="game-container">
        <h1 className="game-title">Fashion Brand Quiz</h1>
        {currentQuiz && (
          <QuizCard
            key={currentQuiz.id + score}
            quiz={currentQuiz}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </>
  );
} 