// import logo from './logo.svg';
// import TextPage from './component/textPage';
// import ZipFile from './component/zipfile';
// import { data } from './treeData';
import './App.css';
// import Basic from './component/testPage';
// import FolderTree from './component/fileTree';
// import MonacoEditor from './component/monaco';
import StreamVideo from './component/video';

function App() {

  
  return (
    <div>
      <div>
        <p>Test Application</p>
      </div>
      <StreamVideo />
      {/* <MonacoEditor></MonacoEditor> */}
      {/* <ZipFile /> */}
      {/* <FolderTree data={data}/> */}
    </div>
  );
}

export default App;
