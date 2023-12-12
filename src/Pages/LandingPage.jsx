import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container mt-5'>
     <div className='row align-items-center'>
        <div className='col-lg-4'>
          <h3 >Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-2' style={{textAlign:'justify'}}>Media Player app allow us to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities</p>

          <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no img" />
        </div>
      </div>

      <div className='features'>
        <h3 className='text-center mt-5'>Features</h3>
        <div className="d-flex mt-5 justify-content-between">
          {/* card1 */}
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{height:'400px'}}  src="https://media.tenor.com/7lf54pwUyh0AAAAj/loading.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
          </Card>

          {/* card2 */}
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{height:'400px'}} src="https://www.filmmakersacademy.com/wp-content/uploads/2018/09/music.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
          </Card>

          {/* card3 */}
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{height:'400px'}}  src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row rounded mt-5 border align-items-center p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple , Fast and Powerful</h3>
          <p><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
          <p><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
          <p><span className='fs-5'>Watch history</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default LandingPage