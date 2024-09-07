import { TextField as BaseTextField } from '@mui/material'
import { styled } from '@mui/system'

const TextField = styled(BaseTextField)({
    '& .MuiInputBase-root': {
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#90caf9',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#42a5f5',
    },
    '& .MuiInputLabel-root': {
      color: '#42a5f5',
    },
    '& .MuiInputLabel-shrink': {
      color: '#1e88e5',
    },
})

export default TextField