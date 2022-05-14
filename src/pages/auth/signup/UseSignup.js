import { useState } from "react";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import {doSignup} from '../../../store/action/AuthAction'


let userDetail = {
  userFName: "",
  userLName: "",
  MobileNo: "", 
  userEmail: "",
  password: ""
}

export default function UseSignup() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(userDetail)
  const [signupLoading, setSignupLoading] = useState(false)

  const setValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const signupHandler = () => {
    console.log("signup")
    if (!userData.userEmail || !userData.password || !userData.userFName || !userData.userLName) {
      toast.error("Please field all required data first.")
      return
    }
     dispatch(doSignup(userData,setSignupLoading))
  }

  const clearHandle = () => {
    setUserData(userDetail)
    toast.success("Form has been clear.")
  }
  

  return {
    userData,
    setValue,
    signupHandler,
    signupLoading,
    clearHandle
  }
}
