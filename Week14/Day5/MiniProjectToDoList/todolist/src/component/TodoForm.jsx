import React from "react";

const TodoForm = ({ handleInput, handleSubmit, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label />
      Add a new todo:
      <input
        placeholder="Title"
        onChange={handleInput}
        name="title"
        value={input?.title}
      />
      <label />
      <textarea
        placeholder="Comment"
        onChange={handleInput}
        name="content"
        value={input?.content}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default TodoForm;
