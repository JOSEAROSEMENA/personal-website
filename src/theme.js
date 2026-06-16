import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#52d7e8',
      light: '#8fefff',
      dark: '#1793a6',
      contrastText: '#061014',
    },
    secondary: {
      main: '#c67a50',
      light: '#e1a17a',
      dark: '#8d4d30',
      contrastText: '#080b0f',
    },
    background: {
      default: '#080b0f',
      paper: '#10161d',
    },
    text: {
      primary: '#f2f6f8',
      secondary: '#9ba7b4',
    },
    accent: '#52d7e8',
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Newsreader", "Times New Roman", serif',
      fontWeight: 700,
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
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          padding: '11px 22px',
          transition: 'border-color 180ms ease, background-color 180ms ease, color 180ms ease',
          boxShadow: 'none',
          '&:focus-visible': {
            outline: '2px solid #52d7e8',
            outlineOffset: 3,
          },
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          background: '#52d7e8',
          color: '#061014',
          '&:hover': {
            background: '#8fefff',
          },
        },
        outlined: {
          borderColor: 'rgba(242, 246, 248, 0.18)',
          color: '#f2f6f8',
          '&:hover': {
            borderColor: '#52d7e8',
            backgroundColor: 'rgba(82, 215, 232, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          transition: 'border-color 180ms ease, background-color 180ms ease',
          border: '1px solid rgba(242, 246, 248, 0.1)',
          backgroundImage: 'none',
          '&:hover': {
            boxShadow: 'none',
            borderColor: 'rgba(82, 215, 232, 0.38)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #52d7e8',
            outlineOffset: 4,
            borderRadius: 4,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #52d7e8',
            outlineOffset: 3,
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
          backgroundColor: '#080b0f',
        },
        main: {
          minHeight: 'calc(100vh - 300px)',
        },
        section: {
          marginBottom: '4rem',
          paddingBottom: '2rem',
        },
        footer: {
          backgroundColor: '#080b0f',
          color: '#f2f6f8',
          padding: '2rem 1rem',
          marginTop: '4rem',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme; 
