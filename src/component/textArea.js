// import { getDefaultNormalizer } from '@testing-library/react';
import CodeEditor from 'react-textarea-code-editor-2';
import React from 'react';
// import { readFile } from 'rw';
// import readFile from 'rw/lib/rw/read-file';

// function get_file_content(){

//   let file = new FileReader()
//   file.readAsText()
//   console.log(file)
// }

function TextArea(props){
    
    const [code, setCode] = React.useState(props.codeData);
    console.log(`Code data is ${props.codeData}`)
      // get_file_content()
      // if (props.codeData){
      //   setCode(props.codeData)
      // }
      return (
        <CodeEditor
          value={code}
          language="python"
          placeholder="Please enter Python code."
          onChange={(evn) => setCode(evn.target.value)}
          onClick={(e)=>setCode(props.codeData)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
      );
}

export default TextArea
