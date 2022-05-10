import { useState  } from "react";


let userDetail = {
    userName : "",
    password: ""
}

export default function UseLogin() {
    const [userData , setUserData] = useState (userDetail)

  
    const setValue = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})
  }

  return {
    userData,
    setValue
  }
}
