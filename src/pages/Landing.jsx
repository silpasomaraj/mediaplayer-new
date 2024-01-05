import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
    <Container className='mt-3 mb-5 d-flex align-items-center justify-content-evenly'>
      <Row>
        <Col>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magni, aspernatur totam commodi sed sunt, facere nostrum qui voluptas similique vitae odio officia voluptatibus accusantium veniam aliquid perferendis, iure Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur suscipit necessitatibus, dolores maxime architecto provident labore vel animi explicabo cumque eum pariatur error repellat odit, ex ut voluptatibus inventore incidunt!</p>
       <Link to ='/home'>
       <button className='btn btn-warning mt-3' >Get started <i class="fa-solid fa-arrow-right"></i></button>
       </Link>
        
        </Col>
        <Col>
         <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt=""  height={'400px'} className='ms-5'/>
        </Col>
      </Row>
      
    </Container >

     <div className=' mb-5'>

      <h3 className='ms-5'>Features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center mt-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

     </div>

     <div className='container mb-4 mt-4 border border-2 border-secondary rounded p-5'>
           <Row>
            <Col>
                <h3 className='text-warning mt-4 mb-5 '>Simple and powerful</h3>
                <p> <span style={{fontSize:"25px"}}>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis placeat in quis sed a commodi provident eligendi ad nihil officiis iusto deleniti eos error, fuga ratione facilis esse saepe minima!</p>
                <p> <span style={{fontSize:"25px"}}>Play Everything:</span>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis placeat in quis sed a commodi provident eligendi ad nihil officiis iusto deleniti eos error, fuga ratione facilis esse saepe minima!</p>
                <p><span className='fs-5 fw-bolder'>Play Everything:</span>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis placeat in quis sed a commodi provident eligendi ad nihil officiis iusto deleniti eos error, fuga ratione facilis esse saepe minima!</p>
            </Col>
             <Col>
                  <div>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/YXknXWCazZQ" title="Love Of Maathan &amp; Appu|Mayanadhi Love Album|3 Years|Tovino Thomas |Aiswarya Lekshmi|AJ Creations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
             </Col>
           </Row>
     </div>

    </>
  )
}

export default Landing