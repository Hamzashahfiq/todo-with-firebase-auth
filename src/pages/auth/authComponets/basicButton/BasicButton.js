import Button from '@mui/material/Button';
import CircularLoading from '../../../../component/circularLoading/CircularLoading';


export default function BasicButton({ text, customStyle, onPress, loginLoading }) {
  return (
    <>
      {
        loginLoading ?
          <Button variant="contained" sx={{ width: '180px' }} style={customStyle}> <CircularLoading /> </Button> :
          <Button onClick={onPress} variant="contained" sx={{ width: '180px' }} style={customStyle}> {text || 'Login'}</Button>
      }
    </>
  );
}