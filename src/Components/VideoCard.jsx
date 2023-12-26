import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addVideoToHistoryAPI, removeAVideoAPI } from '../services/allAPI';


function VideoCard({video,setDeleteVideoResponse,insideCategory}) { //arg video is inherited from view.so we can pass data frm parent to child by props.here destructure method is used since data passes through props is obj
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => { //async since api call
    setShow(true);
    //to generate data to be stored in history

    const {caption,link} =video
    let today = new Date();
    let timestamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(today)

    let videoHistory = {caption,link,timestamp} //since in json data are stored as object
    //make api call
    await addVideoToHistoryAPI(videoHistory)
  }

  const removeVideo=async (id)=>{
    await removeAVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e,id)=>{
    console.log("Drag started...Video Id:"+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
    {/*  */}
    <Card draggable onDragStart={e=>dragStarted(e,video?.id)}> 
      <Card.Img onClick={handleShow} height={'200px'} variant="top" src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video?.caption}</h5>
          {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn'><div className="i fa-solid fa-trash text-danger"></div></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height="387" src={`${video?.link}?autoplay=1`} title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard