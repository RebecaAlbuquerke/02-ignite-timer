import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
