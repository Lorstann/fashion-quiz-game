import React from "react";

export default function ScoreCounter({ score, anim }) {
  return (
    <div className={`score-counter${anim ? ` ${anim}` : ""}`}>Score: {score}</div>
  );
} 