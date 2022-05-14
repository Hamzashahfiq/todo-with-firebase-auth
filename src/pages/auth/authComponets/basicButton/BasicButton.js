import Button from '@mui/material/Button';
import CircularLoading from '../../../../component/circularLoading/CircularLoading';


export default function BasicButton({ text, customStyle, onPress, loading, type }) {
  return (
    <>
      {
        loading ?
          <Button variant="contained" sx={{ width: '180px' }} style={customStyle}> <CircularLoading /> </Button> :
          <Button type = {type} onClick={onPress} variant="contained" sx={{ width: '180px' }} style={customStyle}> {text || 'Login'}</Button>
      }
    </>
  );
}