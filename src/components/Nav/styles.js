import styled, { css } from 'styled-components'

export const Nav = styled.nav.attrs({
  className: 'Nav',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0 1rem;

  ${({ theme }) => theme && css`
    a { text-decoration: none; }
    transform: rotate(-0.9725deg);

    h1 {
      font-family: ${theme.font.logo};
      font-size: ${theme.font.size.heading4};
      color: ${theme.color.primary3};

      @media(min-width: 360px) { font-size: ${theme.font.size.heading3}; }

      span:first-of-type { color: ${theme.color.tertiary3}; }

      span:last-of-type { font-size: 3rem; }
  `}
`
