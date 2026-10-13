"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let frame: number;

    const moveMouse = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      // Smooth delayed movement
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      cursor.style.transform = `translate3d(
        ${cursorX}px,
        ${cursorY}px,
        0
      ) translate(-50%, -50%)`;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
