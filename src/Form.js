import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("テキストを追加してください。");
    } else {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="タスクを入力…"
        value={value}
      />
      <button disabled={value.trim() === ""}>送信</button>
    </form>
  );
};

export default Form;
