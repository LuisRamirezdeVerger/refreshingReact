import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      <label>
        {/* Create the checkbox */}
        <input type="checkbox" checked={todo.complete} />
        {/* Call the parameter "name" inside App() from App.js */}
        {todo.name}
      </label>
    </div>
  );
}
