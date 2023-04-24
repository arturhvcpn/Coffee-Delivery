import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors['white-50']};
    color: ${({ theme }) => theme.colors['brown-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) =>
      theme.typography.fontFamily.roboto}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export { GlobalStyle }
