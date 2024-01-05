import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {uploadVideo}  from '../services/allAPI'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add(setUploadVideoStaus) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video,setVideo] =useState({
    id: "",
    caption: "",
    url: "",
    embededLink: ""
  });
  

  const embededVideoLink=(e)=>{
    const{value} = e.target;
   const videoLink=`https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideo({ ...video,embededLink: videoLink })
  }
  

  const handleUpload=async()=>{
    const {id,caption,url,embededLink}= video
    if (!id || !caption || !url || !embededLink)
    {   
      
      toast.warn("fill it GURLL")
        
    }
     else {

      const response=await uploadVideo(video)
         if(response.status==201)
          {   
            toast.success(`succesfully inserted the video${response.data.caption}`)
             setUploadVideoStaus(response.data)
               handleClose();
        
          }
           else{
                      
            toast.error("something is wrong gurll")
                }
        
    
    }
  }
 
  
  return (
    <>
         <div className='d-flex  align-irems-center'>
            <h5>Upload new video</h5>
            <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5 ms-3" style={{color:"white"}}></i></button>
         </div>

         
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-3 text-warning"></i>
          upload video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the form</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">  
             <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">  
             <Form.Control type="text" placeholder="Enter video caption"onChange={(e)=>setVideo({...video,caption:e.target.value})} />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">  
             <Form.Control type="text" placeholder="Enter video image url"onChange={(e)=>setVideo({...video,url:e.target.value})} />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">  
             <Form.Control type="text" placeholder="Enter video youtube link" onChange={(e)=>embededVideoLink(e)} />
             </Form.Group>
         </Form>
            


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='btn-warning' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' autoClose={1000} theme='colored'></ToastContainer>

      
     
      
    </>
  )
}



export default Add
