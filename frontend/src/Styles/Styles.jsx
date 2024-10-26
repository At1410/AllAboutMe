import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography, Box, TextField, Button } from '@mui/material';


export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'black',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const StylesTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const StyleBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  maxHeight: '80%',
  margin: '0 auto',
  padding: 10,
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflowY: 'auto',
});

export const StyleTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.mode === 'dark' ? '#000' : '#000',
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.mode === 'dark' ? '#000' : '#000',
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#000' : '#000',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#1d8bf8' : '#1d8bf8',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#1d8bf8' : '#1d8bf8',
    },
  },
}));

export const StyleButton = styled(Button)({
  marginTop: 16,
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#115293',
  },
});

