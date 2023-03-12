import axios from "axios"

const postCall = async (payload) =>{

   return  await axios.post('https://dummyjson.com/auth/login',payload)
      
}
export default postCall;