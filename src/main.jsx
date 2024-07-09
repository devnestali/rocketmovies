import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviePreview } from './pages/MoviePreview'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>,
)
