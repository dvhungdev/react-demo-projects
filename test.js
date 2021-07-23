npm i react-draft-wysiwyg draft-js draftjs-to-html

import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./App.css";

function App() {
  const [editorState, setEditorState] = useState("");

  const onEditorStateChange = (contentState) => {
    console.log(contentState);
    console.log("TEXT: ", draftToHtml(convertToRaw(contentState.getCurrentContent())));
    setEditorState(contentState);
  };

  return (
    <div className="App">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // onContentStateChange={onEditorStateChange}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: [
            "inline",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
          ],
        }}
      />
    </div>
  );
}

export default App;
