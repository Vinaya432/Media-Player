import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryAPI, getAllVideosAPI, updateCategoryAPI } from '../services/allAPI'



function View({uploadVideoresponse,setDropResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false) //child to parent data passing,statelifting
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false) //set value to false since when a video is deleted its state value become true.ie, when we delete 2nd videi also the value become true.ie the value of the state is not changing,ie useEffect dont wrk
  },[uploadVideoresponse,deleteVideoResponse])

  const getAllUploadedVideos=async ()=>{
    const result = await getAllVideosAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }else{
      console.log("API Failed");
      setAllVideos([])
    }
  }

  //to delete videos from category while drag and drop
  const dragOver =(e)=>{
    e.preventDefault()
  }

  const videoDropped= async(e)=>{
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data}= await getAllCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result= selectedCategory.allVideos.filter(vitem=>vitem.id!=videoId)
    let {id,CategoryName} = selectedCategory
    let newCategory={id,CategoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropResponse(res)
  }

  return (
    <>
      <Row droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
               <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video}/>
          </Col>
          )):<p className='fs-4 text-warning fw-bold'>No Videos are Uploaded yet!!</p>
      
        }
      </Row>
    </>
  )
}

export default View