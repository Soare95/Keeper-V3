import React, { useState } from "react";

function CreateArea() {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  
  function handleText(event) {
    const {value, name} = event.target;

    setInputText(prevChar => {
      if (name === "title") {
        return {
          title: value,
          content: prevChar.content
        }
      } else if (name === "content") {
        return {
          title: prevChar.title,
          content: value
        }
      }
    })

    // setInputText="";
    event.preventDefault();
  } 

  return (
    <div>
      <form>
        <input onChange={handleText} name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
