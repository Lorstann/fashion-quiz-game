import React, { useState, useEffect } from "react";

export default function QuizCard({ quiz, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    setSelected(null);
    setFeedback("");
    setFade("fade-in");
  }, [quiz.id]);

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    const isCorrect = option === quiz.correctBrand;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setFade("fade-out");
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 800);
  };

  return (
    <>
      <div className="image-container">
        <img
          src={quiz.image}
          alt={quiz.description}
          className={`fashion-image ${fade}`}
          draggable="false"
        />
      </div>
      <div className="options-container">
        {quiz.options.map((option) => (
          <button
            key={option}
            className={`option-button${
              selected
                ? option === quiz.correctBrand
                  ? " correct"
                  : option === selected
                  ? " incorrect"
                  : ""
                : ""
            }`}
            onClick={() => handleSelect(option)}
            disabled={!!selected}
            tabIndex={0}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
} 