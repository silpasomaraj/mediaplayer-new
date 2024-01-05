import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  deleteVideo} from '../services/allAPI';
import { addToHistory } from '../services/allAPI';

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function Videocard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //3 data to insert 1.cap 2. link 3. timestamp
    const {caption,embededLink}=displayVideo;
    const today=new Date;
    console.log("===today===",today);
    const timestamp=new Intl.DateTimeFormat('en-us',{
        year:'numeric',
        month:'2-digit',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    }).format(today)

    console.log(timestamp);

    let videoDetails={
      caption:caption,
      embededLink:embededLink,
      timestamp:timestamp
    }
    await addToHistory(videoDetails)

}
  console.log("===display video===");
  console.log(displayVideo);
  const removeVideo=async(id)=>{
  const response= await deleteVideo(id)
  setDeleteVideoStatus(true)  
}

  return (
    <>
         <Card style={{ width: '15rem',height:"325px" }}onClick={handleShow}>
           <Card.Img variant="top" height ="250px" width="100%" src={displayVideo.url} />
            <Card.Body>
            <div className='d-flex align-items-center justify-content-evenly'>
              <h6>{displayVideo.caption}</h6>
                <Button variant="danger" className='ms-5' onClick={()=>removeVideo(displayVideo.id)}>
                   <i class="fa-solid fa-trash"></i>
                </Button>
            </div>

      </Card.Body>
        </Card>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <iframe width="100%" height="415" src={`${displayVideo.embededLink}?autoplay=1`}
         title="MEARN SEP 23 B3 12 pm Sulthan | 2024-01-03 | React js  video player part 8, history, delete" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard