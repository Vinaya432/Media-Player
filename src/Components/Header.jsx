import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand style={{color:'white',fontSize:'25px'}}>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <h5 className='d-flex align-items-center' style={{height:'50px'}}>
              <i class="fa-solid fa-cloud-arrow-up fa-beat me-2 " style={{height:'35px'}}></i>
               Media Player
            </h5>
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header