import React from "react";

/**
 * A reusable button component that displays a button element with the specified text and onClick function.
 * 
 * @param {string} text - The text to display on the button.
 * @param {function} onClick - A function to be called when the button is clicked.
 */
function Button({ text, onClick }) {
  return (
    <button onClick={onClick} class="btn btn-primary">{text}</button>
  );
}

export default Button;