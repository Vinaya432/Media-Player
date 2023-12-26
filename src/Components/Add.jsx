import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })

  console.log(uploadVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbededLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`http://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link: `http://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleUpload = async()=>{
    const {id,caption,url,link} = uploadVideo;
    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete. Please fill the form completely!!!")
    }else{
      //store the uploading data into json server
     
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);

      if(result.status>=200 && result.status<300){
        //sucess
        handleClose() //to close the modal

        //reset uploadvideo state

        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })

        //share the result.data to view component
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
   
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Videos</h5>
        <button onClick={handleShow} style={{color:'white'}} className='btn'><i class="fa-solid fa-photo-film"></i></button>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Uploading  Form </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Details!!!</p>
        <FloatingLabel controlId="videoId" label="Uploading Video ID" className="mb-3" >
            <Form.Control type="text" placeholder="Upload Video ID" onChange={e=>setUploadVideo({...uploadVideo,id: e.target.value})}/>
        </FloatingLabel>

      <FloatingLabel controlId="videoCap" label="Uploading Video caption" className="mb-3" >
        <Form.Control type="text" placeholder="Upload Video caption"  onChange={e=>setUploadVideo({...uploadVideo,caption: e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlId="videoImg" label="Uploading Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Upload Video Image URL" onChange={e=>setUploadVideo({...uploadVideo,url: e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlId="utubeLink" label="Uploading Youtube Link" className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Youtube Link" onChange={getYoutubeEmbededLink} />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add