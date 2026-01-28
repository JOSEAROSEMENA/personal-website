import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f1217',
      light: '#2a3442',
      dark: '#090b10',
      contrastText: '#f6efe6',
    },
    secondary: {
      main: '#c86a3f',
      light: '#d98962',
      dark: '#a85532',
      contrastText: '#f6efe6',
    },
    background: {
      default: '#f6efe6',
      paper: '#fbf6ef',
    },
    accent: '#1f7a8c',
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
      marginBottom: '1.5rem',
    },
    h3: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 600,
      lineHeight: 1.3,
      marginBottom: '1rem',
    },
    h4: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.8,
      fontSize: '1.02rem',
    },
    body2: {
      lineHeight: 1.6,
      fontSize: '0.95rem',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 24px rgba(200, 106, 63, 0.25)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #c86a3f 0%, #a85532 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #d98962 0%, #c86a3f 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(16, 20, 28, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(15, 18, 23, 0.08)',
          '&:hover': {
            boxShadow: '0 18px 48px rgba(16, 20, 28, 0.16)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '3rem',
          paddingBottom: '3rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          backgroundColor: '#f6efe6',
        },
        main: {
          minHeight: 'calc(100vh - 300px)',
        },
        section: {
          marginBottom: '4rem',
          paddingBottom: '2rem',
        },
        footer: {
          backgroundColor: '#0f1217',
          color: '#f6efe6',
          padding: '2rem 1rem',
          marginTop: '4rem',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme; 
