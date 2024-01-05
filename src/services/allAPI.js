import {serverURL} from "./serverURL";
import {commonAPI} from "./commonAPI";

// upload video


 export const uploadVideo=async(reqBody)=>{
 return await commonAPI('POST',`${serverURL}/videos`,reqBody)
   }

//get all videos

    export const getAllVideos =async()=>{
    return await commonAPI ('GET',`${serverURL}/videos`,"")


  }
   
  //delete video

    export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
   }

   //add to watch history




    export const addToHistory =async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
   }

   //get all watchhistory
    export const getAllWatchHistory =async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
   }

    
    //delete watch history
      export const deleteWatchHistory=async(id)=>{
      return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
    }

    //add category
      export const addCategory=async(reqBody)=>{
      return await commonAPI('POST',`${serverURL}/category`,reqBody)
    }


    //get all category
      export const getAllCategory =async()=>{
      return await commonAPI('GET',`${serverURL}/category`,"")
     }

     //delete watch history
      export const deleteCategory=async(id)=>{
      return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
    }
  