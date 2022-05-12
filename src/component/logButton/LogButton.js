import React from 'react'
import Button from '@mui/material/Button';
import CircularLoading from '../circularLoading/CircularLoading';

export default function LogButton({buttonIcon, lable, customStyle,onPress,isLoading}) {
    return (
        <>
            <Button sx={customStyle} variant="outline" startIcon={isLoading?<CircularLoading /> : buttonIcon} onClick = {isLoading?  null: onPress}>
                  {lable || 'Login'} 
            </Button>
        </>
    )
}
