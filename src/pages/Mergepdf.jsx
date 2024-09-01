import { Col, Row } from 'react-bootstrap'
import './Mergepdf.css'
import { useRef } from 'react';

function Mergepdf() {
 
 const fileInputRef = useRef(null);

 
 const handleButtonClick = () => {
   fileInputRef.current.click(); 
 };


 const handleFileChange = (event) => {
   const files = event.target.files;
   if (files.length > 0) {
     console.log('Selected files:', files);
   }
 };
  return (
    <>
    <Row className='mb-4 '>
    <Col lg={2} xl={2}></Col>
    <Col lg={8} xl={8} className='mb-4'>
    <h1 className="text-center" style={{fontSize:'45px',opacity:'0.9'}}>Merge PDF files</h1>
      <h4 className='text-secondary text-center'>Combine PDFs in the order you want with the easiest PDF merger available.</h4> 
      <div className='d-flex flex-row-reverse justify-content-center'>
      <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: 'none' }} 
              multiple 
              onChange={handleFileChange}
            />
      <a className="uploader__btn tooltip--left active mt-4" type='file' id="pickfiles" cursor='pointer' title="Add more files"  data-title="Add more files"  onClick={handleButtonClick}>
      <span style={{cursor:'pointer'}}>Select PDF files</span></a>
      <div className='d-flex flex-column ms-2'>
      <a href=""  className='uploader_button btn  rounded-5 mt-4'><i className="fa-brands fa-google-drive"></i></a>
      <a href="" className='uploader_button btn  rounded-5 mt-2'><i className="fa-brands fa-dropbox"></i></a>


      </div>

      </div>
      <h6 className='text-center text-secondary'>or drop PDFs here</h6>
    </Col>

    <Col lg={2} xl={2} ></Col>

    </Row>
    <div className='p-5'>

    </div>
    <div className='p-5'>

    </div>
    
      
         
    
    
    
    
      
    
    
    
    </>
  )
}

export default Mergepdf