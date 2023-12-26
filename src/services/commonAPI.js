import axios from 'axios'

// creating a common api call
export const commonAPI = async (httpMethod,url,reqBody)=>{
    let reqConfig ={
        method : httpMethod,
        url, //key only since key and arg name is same
        headers :{
            "Content-Type":"application/json"
        },
        data : reqBody
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}