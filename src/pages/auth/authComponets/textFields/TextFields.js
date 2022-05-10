import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields({label , type, value,change,name}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  onChange = {change} name= {name} type = {type} value= {value} label={label || 'User Name'} variant="outlined" required />
    </Box>
  );
}
