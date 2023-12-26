import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//upload new video

export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

//get all videos

export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")

}

//view a single video
export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")

}

//Remove a video
export const removeAVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})

}

//insert a video into history
export const addVideoToHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//get viedo from history
export const getVideoFromHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")

}

//remove history
export const removeHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})

}

//addcategory
export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
}

//get all categories
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"a")
}

//remove category
export const removecategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

//update category
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${id}`,categoryDetails)
}