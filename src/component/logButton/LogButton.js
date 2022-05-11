import React from 'react'
import Button from '@mui/material/Button';

export default function LogButton({buttonIcon, lable, customStyle}) {
    return (
        <>
            <Button sx={customStyle} variant="outline" startIcon={buttonIcon}>
                {lable || 'Login'}
            </Button>
        </>
    )
}
