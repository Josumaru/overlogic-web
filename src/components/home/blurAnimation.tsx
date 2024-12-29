"use client";

import { useState, useEffect } from "react";

const colors = ["bg-primary", "bg-primary", "bg-secondary", "bg-secondary", "bg-primary", "bg-secondary"];

const BlurAnimation = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const elementHeight = 24;
    const maxAttempts = 500;
    const minDistance = 20;

    const calculateDistance = (pos1: { top: number; left: number }, pos2: { top: number; left: number }) => Math.sqrt(Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2));

    const generatePositions = () => {
      const generatedPositionsTemp: { top: number; left: number }[] = [];
      let attempts = 0;

      while (generatedPositionsTemp.length < colors.length && attempts < maxAttempts) {
        const newPos = {
          top: Math.random() * (30 - elementHeight),
          left: Math.random() * 100,
        };

        if (generatedPositionsTemp.every((pos) => calculateDistance(pos, newPos) > minDistance)) {
          generatedPositionsTemp.push(newPos);
        }
        attempts++;
      }

      if (generatedPositionsTemp.length < colors.length) {
        console.warn("Some positions overlap due to area limitation. Using fallback positions.");
      }

      return generatedPositionsTemp;
    };

    const positions = generatePositions().map((pos) => ({
      top: `${pos.top}vh`,
      left: `${pos.left}vw`,
    }));

    setPositions(positions);
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
