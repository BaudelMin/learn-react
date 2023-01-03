import React, {useState, useEffect} from 'react';
//  import { Formik, Form, Field, ErrorMessage } from 'formik';
import JSZip from 'jszip';

var zip_location = '../../files/example.zip'
var zip = JSZip()
// import { data } from '../jsLogic/treeData';
 const Basic = (props) => {
  const [showNested, setShowNested] = useState('');

  // handle show/hide functionality
  const onClick= (name) => {
    setShowNested('{ ...showNested, [name]: !showNested[name] }');
  };
  return (
    <div style={{ paddingLeft: "20px" }}>
      <button onClick={onClick}>Show Changes</button>
    </div>
  );
 };
 
 export default Basic;