import React from "react";

/**
 * A reusable button component that takes a text and onClick function as props.
 * Renders a button element with the text and onClick function as props.
 */
function Button({ text, onClick }) {
  return (
    <button onClick={onClick} class="btn btn-outline-primary">{text}</button>
  );
}

export default Button;