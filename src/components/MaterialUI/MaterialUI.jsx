import React from 'react'
import { TextField } from '@mui/material';
import { useState, useCallback } from 'react';

export default function MaterialUI() {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

  return (
    <TextField 
        style={{ 
            margin: '20px',
            outlineColor: 'red'
        }}
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        value={value}
        onChange={handleChange}
        color='secondary'
        
    />
  )
}
