import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, SvgIcon } from '@mui/material'
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';




export const FilterCategory = ({ filterCheckboxContent, handleCheckboxChange }) => {
  return (

    filterCheckboxContent.map((labelCheckbox, index) => (
      <FormControlLabel
        key={index}
        control={<Checkbox defaultChecked={index === 1} checkedIcon={<CheckBoxOutlinedIcon sx={{color: '#55E5C5'}}/>} />}
        label={labelCheckbox}
        onChange={handleCheckboxChange(labelCheckbox)}

        sx={{
          color: '#FFF',
          '& .MuiCheckbox-root': {
            color: '#FFF',
          },
          '& .Mui-checked ~ .MuiTypography-root': {
            color: '#55E5C5',
          },
          '& .Mui-checked': {
            color: '#55E5C5',
          },
          '& span': {
            lineHeight: '20px',
            fontWeight: 500,
            fontSize: '16px',
            paddingTop: '7px',
            paddingBottom: '7px',
          }
        }}
      />
    ))
  )
}
