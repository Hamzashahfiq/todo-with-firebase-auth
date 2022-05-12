import React from 'react'
import './LoginStyle.css' 
import Box from '@mui/material/Box'
import TextFields from '../authComponets/textFields/TextFields'
import BasicButton from '../authComponets/basicButton/BasicButton'
import UseLogin from './UseLogin'

export default function Login() {
  const {userData, setValue, loginHandler,loginLoading,checkButton} = UseLogin()
  return (
        <div className='mainDiv'>
           <div className='singinDiv'>
              <Box component = 'h3' sx={{mb:2}}> Login</Box>
               <TextFields value = {userData.userEmail} change ={(e) => setValue(e)} name = "userEmail" type = {'email'} />
               <TextFields value = {userData.password} change ={(e) => setValue(e)} name = "password" label = {'Password'} type = {'password'}/> 
               <Box sx = {{textAlign: 'center' }}>
               <BasicButton customStyle = {{margin:'20px'}} onPress = {loginHandler} loginLoading = {loginLoading} />
               </Box>
           </div>
        </div>
  )
}
