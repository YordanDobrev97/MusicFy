import { styled } from '@mui/system';
import { TextField, Button, Box, Typography } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
}));

export const Form = styled(Box)(({ theme }) => ({
    backgroundColor: '#181818',
    padding: theme.spacing(4),
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

export const Input = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-root': {
        backgroundColor: '#222',
        borderRadius: '4px',
    },
    '& .MuiInputLabel-root': {
        color: '#bbb',
    },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1DB954',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#1ed760',
    },
    width: '100%',
    padding: theme.spacing(1.5),
}));

export const Text = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: '#bbb',
    marginTop: theme.spacing(2),
}));

export const LogoContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
});