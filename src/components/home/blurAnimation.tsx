"use client";

import { useState, useEffect } from "react";

const colors = ["bg-primary", "bg-primary", "bg-secondary", "bg-secondary", "bg-primary", "bg-secondary"];

const BlurAnimation = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const elementHeight = 24;
    const calculateDistance = (pos1: { top: number; left: number }, pos2: { top: number; left: number }) => Math.sqrt(Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2));
    const newPos = {
      top: Math.floor(Math.random() * 50),
      left: Math.floor(Math.random() * 80),
    };

    const generatePositions = () => {
      const generatedPositionsTemp: { top: number; left: number }[] = [];
      while (generatedPositionsTemp.length < colors.length) {
        const topPosition = Math.min(newPos.top, 100 - elementHeight);

        if (generatedPositionsTemp.every((pos) => calculateDistance(pos, { top: topPosition, left: newPos.left }) > 30)) {
          generatedPositionsTemp.push({ top: topPosition, left: newPos.left });
        }
      }

      return generatedPositionsTemp;
    };

    setPositions(
      generatePositions().map((pos) => ({
        top: `${pos.top}vh`,
        left: `${pos.left}vw`,
      }))
    );
  }, []);

  return (
    <div className="absolute h-full w-full -z-50" suppressHydrationWarning>
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`absolute w-96 h-96 ${colors[index]} rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob ${index % 2 === 0 ? "animation-delay-2000" : "animation-delay-4000"}`}
          style={{ top: pos.top, left: pos.left }}
        ></div>
      ))}
    </div>
  );
};

export default BlurAnimation;
