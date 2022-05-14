import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields({label , type, value,change,name,required }) {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  onChange = {change} name= {name} type = {type} value= {value} label={label || 'User Email'} variant="outlined" required = {required || false}  />
    </Box>
  );
}
