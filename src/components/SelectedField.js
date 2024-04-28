import React, { useState } from 'react'
import { Box } from '@mui/system'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleCategoryQuestions, handleDifficultyQuestions, handleTypeQuestions } from '../redux/action'

const SelectedField = (props) => {
    const { label, options } = props;

    const dispatch = useDispatch()
    const [value, SetValue] = useState("")

    const handleonChange = (e) => {
        SetValue(e.target.value)
        switch (label) {
            case 'Category': {
                dispatch(handleCategoryQuestions(e.target.value))
                break;
            }
            case 'Level': {
                dispatch(handleDifficultyQuestions(e.target.value))
                break;
            }
            case 'Type': {
                dispatch(handleTypeQuestions(e.target.value))
                break;
            }
            default:
                return;
        }
    }

    return (


        <Box mt={3} width="100%" maxWidth={300}>
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleonChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>
        </Box>

    )
}

export default SelectedField
