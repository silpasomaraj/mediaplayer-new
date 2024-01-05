import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='footer d-flex align-item-center justify-content-evenly'>
          <div className='website'style={{width:"400px"}}>
             <h5><i class="fa-solid fa-video text-warning me-2"></i> Media Player</h5>
             <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor voluptatibus nostrum, harum qui, eum, tenetur impedit culpa eius aperiam repellendus accusantium vitae. Delectus odio veniam dicta recusandae quidem provident!</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
              <h4>Links</h4>
              <Link to='/' style={{textDecoration:'none',color:'white'}}>Landing page</Link>
              <Link to='/home' style={{textDecoration:'none',color:'white'}}>Home page</Link>
              <Link to='/watch' style={{textDecoration:'none',color:'white'}}>Watch history</Link>
          </div>
          <div className='guides d-flex flex-column ms-5'>
              <h4>Guides</h4>
              <Link to='https://react.dev/' targrt='_blank' style={{textDecoration:'none',color:'white'}}>React</Link>
              <Link to='https://react.dev/'targrt='_blank' style={{textDecoration:'none',color:'white'}}>React bootstrap</Link>
              <Link to='https://react.dev/'targrt='_blank' style={{textDecoration:'none',color:'white'}}>Boots watch</Link>
          </div>
          <div className='contactus ms-5'>
            <h4>contact us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email' />
               <button className='btn btn-warning ms-2'>subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center'>
              <Link className='ms-3 mt-3'><i class="fa-brands fa-facebook fa-2x"></i></Link> 
              <Link className='ms-3 mt-3'><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link className='ms-3 mt-3'><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
              <Link className='ms-3 mt-3'><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
            </div>
          </div>
      </div>
    </div>
      <p className='mt-5 text-center'>Copyright  &copy; 2023 mediaplayer build with react</p>

    </>
  )
}

export default Footer