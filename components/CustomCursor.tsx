"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let frame = 0;

    const mouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.dataset.visible = "true";
    };

    const mouseLeave = () => {
      cursor.dataset.visible = "false";
    };

    const mouseEnter = () => {
      cursor.dataset.visible = "true";
    };

    const render = () => {
      /*
       * Lower number = more delayed
       * Higher number = follows mouse faster
       */
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursor.style.transform = `
        translate3d(
          ${cursorX}px,
          ${cursorY}px,
          0
        )
        translate(-50%, -50%)
      `;

      frame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="siteCursor"
      data-visible="false"
      aria-hidden="true"
    />
  );
}
