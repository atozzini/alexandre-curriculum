// src/muiTheme.js
import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1e1e1e' },
    secondary: { main: '#f5f5f5' },
  },
});

export default muiTheme;
