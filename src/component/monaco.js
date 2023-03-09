import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
import {editor} from 'monaco-editor';
const value = 'console.log("Hello World")'
const language = 'javascript'
function MonacoEditor() {
  const editorRef = useRef(null);
  // const model = editor.createModel(value, language)
  const [val, setVal] = useState({})
  useEffect(() => {
    console.log(val)
  })

  function handleEditorDidMount(neditor, monaco) {
    editorRef.current = neditor; 
    console.log(editorRef.current)
    console.log(monaco.editor)
    
    console.log('Monaco is ', monaco)
  }
  
  function showValue() {
    setVal(...val)
    alert(editorRef.current.getValue());
  }

  return (
   <>
     <button onClick={showValue}>Show value</button>
     <Editor
       height="90vh"
       defaultLanguage="javascript"
       defaultValue="// some comment"
       onMount={handleEditorDidMount}
       saveViewState='true'
     />
   </>
  );
}

export default MonacoEditor