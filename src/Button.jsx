import React from "react";

function Button({ title, className }) {
  return (
    <div>
      <button
        className={` duration-300 hover:scale-110 ${className}`}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
