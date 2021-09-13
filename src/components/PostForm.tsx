import React from "react";
import "./PostForm.css";

export default function PostForm({
  onClose,
  setTitle,
  setThought,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setThought: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <form
      className="PostForm"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <i
        onClick={() => {
          onClose();
        }}
        className="fas fa-times-circle"
      ></i>
      <label htmlFor="">Title</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label htmlFor="">Thought</label>
      <textarea
        onChange={(event) => {
          setThought(event.target.value);
        }}
        name=""
        id=""
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}
