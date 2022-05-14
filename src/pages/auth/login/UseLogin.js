import { useState } from "react";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import {doLogin} from '../../../store/action/AuthAction'


let userDetail = {
  userEmail: "",
  password: ""
}

export default function UseLogin() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(userDetail)
  const [loginLoading, setLoginLoading] = useState(false)

  const setValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const loginHandler = () => {
    if (!userData.userEmail || !userData.password) {
      toast.error("First enter correct email and password")
      return
    }
     dispatch(doLogin(userData,setLoginLoading))
  }

  

  return {
    userData,
    setValue,
    loginHandler,
    loginLoading,
  }
}
