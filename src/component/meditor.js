import * as monaco from 'monaco-editor';
import {useState, useEffect, useRef} from 'react';

    
let editor = null

function MyEditor(){
    useEffect(() => {
        console.log('this is use effect')
        let element = document.getElementById('monacoEditor')
        console.log('Element is ', element)
        if (!editor){
            editor = monaco.editor.create(element)
            console.log('My edittor is ', editor)
        }
        else{
        }
        
    })
    return (<div>

        <div id='monacoEditor'></div>
    </div>)
}

export default MyEditor
