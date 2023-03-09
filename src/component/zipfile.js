import JSZip from "jszip"
import { useState, useEffect } from "react"
import CodeEditor from 'react-textarea-code-editor-2';
import { saveAs } from "file-saver";


var zip = new JSZip()
let fileReader = new FileReader()


function ZipFile(){
    /**
     * Componet to read zip file. It accept a zip file from computer and read the content of the file with in the zip file.
     */
    const [res, setResult] = useState('No result')
    const [file, getFile] = useState(undefined)
    function saveChanges(){
        let zipfile = zip.loadAsync(file)
        zipfile
        .then(zipData =>{
            console.log(zipData)
            let prom = new Promise((resolve, reject) => {
                if (!zipData){
                    reject('ZipData doesnot exits')
                }
                else{
                    resolve('This this content to be added.')
                }
            })
            zipData.file("ncell-ransomware-detection/README.md", prom)
            
        })
        zipfile
        .then(zipData => {
            zipData.file("ncell-ransomware-detection/README.md")
            .async('text')
            .then(data => {
                console.log('new data is')
                console.log(data)
            })
            .catch(err => console.log(err));
            zip.generateAsync({type:'blob'})
            .then(blob => {
                saveAs(blob, 'download.zip')
            })
            .catch(err => console.log(err))
        })
        
    }
    useEffect(() => {
        // fileReader.onloadend = handleFileRead;
        zip.loadAsync(file)
        .then(zipData => {
            console.log(zipData)
            zipData.file("ncell-ransomware-detection/tasks.robot")
            .async('text')
            .then(content => {
                // console.log(content)
                setResult(content)
            })
            .catch(err => {
                console.log('Error in inner promise.')
                console.log(err)
            })
            
            // fileReader.readAsText(tempfile)
        //     const contents = [];
        //   zipData.forEach((relativePath, zipEntry) => {  // 2) print entries
        //     contents.push(zipEntry.name);
        //   });
        //   console.log(contents)
        })
        .catch(err => {
            console.log('Error in outer promise.')
            console.log(err)
        })
    })
    return (
        <div>
            <div>
                <p>Get a zip file form comlputer.</p>
                <input 
                type='file'
                id="file"
                className="input-file"
                accept=".zip, .md, .robot"
                onChange={e => {
                    let resFile = e.target.files[0]
                    getFile(resFile)
                    // setResult('Zip file is readed.')
                }}
                ></input><b/>
            </div>
            <div>
                <button
                onClick={saveChanges}
                >Save Change</button>
            </div>
            <div>
                <p>Result:</p>
                <CodeEditor
                    value={res}
                    language="python"
                    placeholder="Please enter Python code."
                    onChange={(evn) => setResult(evn.target.value)}
                    // onClick={(e)=>setCode(props.codeData)}
                    padding={15}
                    style={{
                      fontSize: 12,
                      backgroundColor: "#f5f5f5",
                      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </div>
        </div>
    )
}

export default ZipFile
