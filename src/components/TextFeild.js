import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
// import { handleAmountQuestions } from '../redux/action'

const TextFeild = (props) => {
  const { handle,label,type } = props;
  // const dispatch = useDispatch()

  return (
    <Box mt={3} width={'100%'} maxWidth={300}>
      <FormControl fullWidth>
        <TextField
          onChange={handle}
          variant='outlined'
          label={label}
          type={type}
          size='small'

        />
      </FormControl>
    </Box>
  )
}

export default TextFeild
