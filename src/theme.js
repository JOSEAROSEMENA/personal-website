import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55', // A deep blue color
      light: '#4A5B7A',
      dark: '#1A2238',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E63946', // A vibrant red color
      light: '#FF5A6A',
      dark: '#B32B3A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      textAlign: 'center',
    },
    h2: {
      fontWeight: 600,
      marginBottom: '1rem',
      textAlign: 'center',
    },
    h3: {
      fontWeight: 600,
      textAlign: 'center',
    },
    body1: {
      lineHeight: 1.7,
      textAlign: 'center',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
          textAlign: 'center',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
        main: {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
        },
        section: {
          marginBottom: '3rem',
          textAlign: 'center',
        },
        footer: {
          backgroundColor: '#F8F9FA',
          padding: '1rem',
          marginTop: '2rem',
          textAlign: 'center',
        },
      },
    },
  },
});

export default theme; 