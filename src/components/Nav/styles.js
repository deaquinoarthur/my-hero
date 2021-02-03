import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;

  ${({ theme }) => theme && css`
    a { text-decoration: none; }

    h1 {
      font-size: ${theme.font.size.heading4};
      color: ${theme.color.primary3};

      @media(min-width: 360px) { font-size: ${theme.font.size.heading3}; }

      span { color: ${theme.color.tertiary3}; }
  `}
`
