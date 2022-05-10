import * as React from 'react';
import Button from '@mui/material/Button';


export default function BasicButton({text, customStyle}) {
  return (
      <Button variant="contained" sx={{width:'180px'}} style = {customStyle}> {text || 'Login'}</Button>
  );
}