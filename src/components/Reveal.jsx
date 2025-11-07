import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "../styles/Reveal.scss";

const Reveal = ({ children, variant = "up", className = "" }) => {
  const [ref, isVisible] = useRevealOnScroll();

  const classes = [
    "reveal",
    `reveal--${variant}`,
    isVisible ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default Reveal;
