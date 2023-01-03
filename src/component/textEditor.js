import ReactQuill from "react-quill"
import {useState} from 'react'
import 'react-quill/dist/quill.snow.css';


function TextEditor(){
    
    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default TextEditor