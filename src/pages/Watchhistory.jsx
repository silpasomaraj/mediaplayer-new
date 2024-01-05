import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllWatchHistory } from '../services/allAPI'

export default function Watchhistory() {

  const[history,setHistory]=useState([])
async function WatchHistory(){   
    const response =await getAllWatchHistory();
    const {data}=response;
    console.log("===watch history===");
    console.log(data); 
    setHistory(data) 
  }
  useEffect(()=>{
    WatchHistory();
  },[])

  const handleDelete=async(id)=>{
    await deleteWatchHistory(id);
    WatchHistory();
  }

  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h5>watch histoty</h5>
      <Link to='/home' style={{textDecoration:"none",color:"white",fontSize:"15px",fontWeight:"600"}}>
       <i class="fa-solid fa-arrow-left me-3"></i>Back to home
      </Link>

    </div>
    <table className='table contaniner mb-5'>

      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>url</th>
          <th>timestamp</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>


        {
          history.length>0?
          history.map((item,index)=>(
            <tr>
                  <td>{index+1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><button className='btn btn-success' onClick={()=>handleDelete(item.id)}><i class="fa -solid fa-trash"></i></button></td>
            </tr>
          ))
          :
        
                 <p>no watch history found</p>
          }
       
          </tbody> 
         </table>
         </>
          )
          }

