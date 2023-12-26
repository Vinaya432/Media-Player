import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getVideoFromHistoryAPI, removeHistoryAPI } from '../services/allAPI'




function WatchHistory() {

  const [history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()},[])
    
  const getHistory = async()=>{
    const result = await getVideoFromHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }

  const removeHistoryItem=async (id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div className='container d-flex justify-content-between mt-5 mb-5'>
        <h3>WatchHistory</h3>
        <Link to={'/home'} style={{textDecoration:'none'}}>
          <h5 className='d-flex' style={{height:'40px'}}><i style={{height:'30px'}} class="fa-solid fa-arrow-left fa-beat me-3"></i>Back to Home</h5>
        </Link> 
      </div>
      <Table striped  hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {history?.length>0?history?.map((
          video,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td>{video?.link}</td>
              <td>{video?.timestamp}</td>
              <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger" ></i></button></td>
           </tr>
          )):<p className='fw-bold text-warning fs-4'>No Watch History</p>
          }
      </tbody>
      </Table>


    </>
  )
}

export default WatchHistory