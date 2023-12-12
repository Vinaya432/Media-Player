import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='row mt-5'>
      <div className="col-lg-1"></div>

        <div className="col-lg-3 info ">
          <h3 className='d-flex align-items-center' style={{height:'60px'}}> <i style={{height:'45px'}} class="fa-solid fa-cloud-arrow-up fa-beat me-2" ></i>Media Player</h3>
          <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licenced MIT,docs CC BY 3.0.</p>
        
        </div>
        <div className="links col-lg-2">
          <div className='d-flex flex-column '>
            <h3>Links</h3>
            <Link  style={{textDecoration:'none',color:'white'}} to={'/'}>Landing Page</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/home'}>Home</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/history'}>Watch History</Link>
          </div>
        </div>
        <div className="guide col-lg-2 text-light">
          <div className='d-flex flex-column'>
            <h3>Guides</h3>
            <a style={{textDecoration:'none',color:'white'}} href="" target='_blank'>React</a>
            <a style={{textDecoration:'none',color:'white'}} href="" target='_blank'>React Bootstrap</a>
            <a style={{textDecoration:'none',color:'white'}} href="" target='_blank'>React routing</a>
          </div>
        </div>
        
        <div className="contact col-lg-3">
          <h3>Contact Us</h3>
          <div className="d-flex">
              <input placeholder='Enter Your Email' type="text" className='form-control'/>
              <button className='btn btn-info'></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
              <i style={{height:'45px'}} class="fa-solid fa-envelope fa-2x"></i>
              <i style={{height:'45px'}} class="fa-brands fa-twitter fa-2x"></i>
              <i style={{height:'45px'}} class="fa-brands fa-github fa-2x"></i>
              <i style={{height:'45px'}} class="fa-brands fa-facebook fa-2x"></i>
              <i style={{height:'45px'}} class="fa-brands fa-instagram fa-2x"></i>
              <i style={{height:'45px'}} class="fa-brands fa-linkedin fa-2x"></i>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <p className='text-center mt-4'>Copyright &copy; 2023 Media Player.Built with React.</p>

    </div>
  )
}

export default Footer