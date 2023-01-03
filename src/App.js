// import logo from './logo.svg';
// import TextPage from './component/textPage';
import ZipFile from './component/zipfile';
import { data } from './treeData';
import './App.css';
// import Basic from './component/testPage';
import FolderTree from './component/fileTree';

function App() {

  
  return (
    <div>
      <ZipFile />
      {/* <FolderTree data={data}/> */}
    </div>
  );
}

export default App;
