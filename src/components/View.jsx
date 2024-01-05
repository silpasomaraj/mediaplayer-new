import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getAllVideos } from '../services/allAPI';

function View() {
  const [allVideo,setAllVideo]=useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getAllUploadedVideos = async()=>{
    const response=await getAllVideos();
    const {data}=response;
    setAllVideo(data)
    
  }
  useEffect(()=>{
    getAllUploadedVideos();

  },[])
  console.log("==All Videos");
  console.log(allVideo);
  return (
    <>
        <Row>
          {
            allVideo.length>0?
            allVideo.map((Video)=>(
              <Col sm={12} md={6} lg={4} xl={4} className='mb-5 ms-5'>
              <Videocard displayVideo={Video} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>
            ))
            :
            <p>no item to display</p>
          }
        
      </Row>

    </>
  )
}

export default View