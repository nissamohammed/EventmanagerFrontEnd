import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login 
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add event
export const addEventApi = async(reqBody,reqHeader)=>{
        return await commonApi('POST',`${serverUrl}/addevent`,reqBody,reqHeader)
}

//user events
export const userEventsApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/userevents`,"",reqHeader)
}

//update event
export const editEventApi = async(eventid,reqBody,reqHeader)=>{   
    return await commonApi('PUT',`${serverUrl}/editevent/${eventid}`,reqBody,reqHeader)
}


//delete user created events
export const deleteEventApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}


//all get Events 
//send by using query parameter
export const allEventsApi = async(searchkey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allevents?search=${searchkey}`,"",reqHeader)
}

