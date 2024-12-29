import { Button as ButtonBase } from '@mui/material';
import { styled } from '@mui/system';

const Button = styled(ButtonBase)({
    backgroundColor: '#42a5f5',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '50px',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#1e88e5',
    },
});

export default Button;