"use client";

import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

export const ConfettiButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      // Calculate the position for the confetti origin
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

      // Trigger confetti from the button's position
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y },
      });
    }
  };
  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};
