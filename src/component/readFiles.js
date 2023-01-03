function ReadFile(props) {
    let fileReader;
    const handleFileRead = e => {
        const content = fileReader.result;
        // console.log(`Content is ${content}`)
        props.getCodeData(content)
    }
    const handleFileChosen = file => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        console.log(file)
        fileReader.readAsText(file);
    }
    
    return (<div>
        <input 
        type='file' 
        id='file' 
        className="input-file"
        accept=".py"
        onChange={e => {
            handleFileChosen(e.target.files[0])
        }}
        />
    </div>)
}

export default ReadFile
