import { useContext } from "react";

import SomeContext from "./SomeContext";

function Comment() {
  const { addComment, setAddComment } = useContext(SomeContext);
  const { inputText, setInputText } = useContext("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addComment = {
      id: inputText,
    };
    addComment(setAddComment);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onClick={() => {
          addComment(setAddComment);
        }}
        type="text"
        value={addComment}
        onChange={(event) => setInputText(event.target.value)}
      />
      value={addComment}
      <button type="submit">Lägg till kommentar</button>
    </form>
  );
}

export default Comment;
