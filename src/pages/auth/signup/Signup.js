import './SignupStyle.css'
import Box from '@mui/material/Box'
import TextFields from '../authComponets/textFields/TextFields'
import BasicButton from '../authComponets/basicButton/BasicButton'
import UseSignup from './UseSignup'


export default function Signup() {
    const { userData, setValue, signupHandler, signupLoading, clearHandle } = UseSignup()
    return (
        <div className='mainSignupDiv'>
            <div className='signupDiv'>
                <Box component='h3' sx={{ mb: 2 }}> Sign Up</Box>
                <Box component='form'>
                    <TextFields value={userData.userFName} label="First Name" change={(e) => setValue(e)} name="userFName" type={'text'} required={true}/>
                    <TextFields value={userData.userLName} label="Last Name" change={(e) => setValue(e)} name="userLName" type={'text'} required={true}/>
                    <TextFields value={userData.MobileNo} label="Mobile no" change={(e) => setValue(e)} name="MobileNo" type={'number'} />
                    <TextFields value={userData.userEmail} change={(e) => setValue(e)} name="userEmail" type={'email'} required={true} />
                    <TextFields value={userData.password} change={(e) => setValue(e)} name="password" label={'Password'} type={'password'} required={true} />
                    <Box sx={{ textAlign: 'center',  m:1 }}>
                        <BasicButton type={'submit'} text={'Sign Up'} customStyle={{ margin:0  }} onPress={signupHandler} loading={signupLoading} />
                    </Box>
                    <Box sx={{ textAlign: 'center',  m:1 }}>
                        <BasicButton text={'Clear'} customStyle={{ backgroundColor: 'orange',margin:0 }} onPress={clearHandle} />
                    </Box>
                </Box>
            </div>
        </div>
    )
}
