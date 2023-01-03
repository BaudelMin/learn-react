import { useState } from "react";
import ReadFile from "./readFiles";
import TextArea from './textArea';

function TextPage(props){
    // console.log(props)
    const [codeData, getCodeData] = useState(`def main():
    print("Hello World)`)
    // console.log(`Code data is ${codeData}`)
    return (
        <div>
            <div>
                <ReadFile getCodeData={getCodeData}/>
            </div>
            <p>This is page text area page.</p>
            <p>Text can be written bellow:</p>
            <div>
                <TextArea codeData={codeData} />
            </div>
        </div>
    )
}

export default TextPage;
