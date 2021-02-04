import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/luckiest-guy-v11-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/luckiest-guy-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/luckiest-guy-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/luckiest-guy-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('/fonts/luckiest-guy-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/luckiest-guy-v11-latin-regular.svg#LuckiestGuy') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
