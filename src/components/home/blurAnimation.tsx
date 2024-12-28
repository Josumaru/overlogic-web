"use client";

import { useState, useEffect } from "react";

const colors = ["bg-primary", "bg-pink-300", "bg-purple-300", "bg-secondary"];

const generateRandomPosition = () => ({
  top: Math.random() * 80,
  left: Math.random() * 80,
});

const calculateDistance = (
  pos1: { top: number; left: number },
  pos2: { top: number; left: number }
) =>
  Math.sqrt(Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2));

const BlurAnimation = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generatedPositions: { top: number; left: number }[] = [];
    const elementHeight = 24; // 96 (h-96) in rem (each rem = 16px)

    while (generatedPositions.length < colors.length) {
      const newPos = generateRandomPosition();
      // Ensure the bottom of the element is not out of the screen
      const topPosition = Math.min(newPos.top, 100 - elementHeight);

      if (
        generatedPositions.every(
          (pos) => calculateDistance(pos, { top: topPosition, left: newPos.left }) > 30
        )
      ) {
        generatedPositions.push({ top: topPosition, left: newPos.left });
      }
    }

    setPositions(
      generatedPositions.map((pos) => ({
        top: `${pos.top}vh`,
        left: `${pos.left}vw`,
      }))
    );
  }, []);

  return (
    <div className="absolute h-full w-full">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`absolute w-96 h-96 ${colors[index]} rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob ${
            index % 2 === 0 ? "animation-delay-2000" : "animation-delay-4000"
          }`}
          style={{ top: pos.top, left: pos.left }}
        ></div>
      ))}
    </div>
  );
};

export default BlurAnimation;
