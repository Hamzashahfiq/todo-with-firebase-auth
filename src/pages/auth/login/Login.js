import React from 'react'
import './LoginStyle.css'
import Box from '@mui/material/Box'
import TextFields from '../authComponets/textFields/TextFields'
import BasicButton from '../authComponets/basicButton/BasicButton'
import UseLogin from './UseLogin'
import { Link } from "react-router-dom";

export default function Login() {
   const { userData, setValue, loginHandler, loginLoading, } = UseLogin()
   return (
      <div className='mainDiv'>
         <div className='singinDiv'>
            <Box component='h3' sx={{ mb: 2 }}> Login</Box>
            <Box component='form'>
               <TextFields value={userData.userEmail} change={(e) => setValue(e)} name="userEmail" type={'email'} required ={true} />
               <TextFields value={userData.password} change={(e) => setValue(e)} name="password" label={'Password'} type={'password'} required ={true} />
               <Box sx={{ textAlign: 'center', m:1}}>
                  <BasicButton type= {'submit'} customStyle={{ margin: '0px' }} onPress={loginHandler}  loading={loginLoading} />
               </Box>
               <Box sx={{ textAlign: 'center',  m:1 }}>
                <Link to = '/signup' style={{textDecoration: 'none'}}><BasicButton text ={'Sign Up'} customStyle={{ margin: '0px', backgroundColor:"#c7893e"}}  /></Link> 
               </Box>
            </Box>
         </div>
      </div>
   )
}
