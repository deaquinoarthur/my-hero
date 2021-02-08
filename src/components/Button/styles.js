import styled, { css } from 'styled-components'

export const Button = styled.button.attrs({
  className: 'Button'
})`
  ${({ theme, primary, secondary, disabled }) => css`
    min-width: 200px;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    font-size: ${theme.font.size.button};
    color: ${theme.color.neutral5};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    ${!!primary &&
    css`
      color: ${theme.color.neutral1};
      background-color: ${theme.color.primary2};

      &:hover {
        background-color: ${theme.color.primary3};
      }

      &:active {
        background-color: ${theme.color.primary1};
      }
    `}

    ${!!secondary &&
    css`
      color: ${theme.color.neutral1};
      background-color: ${theme.color.secondary2};

      &:hover {
        background-color: ${theme.color.secondary3};
      }

      &:active {
        background-color: ${theme.color.secondary1};
      }
    `}

    ${!!disabled &&
    css`
      color: ${theme.color.neutral4};
      background-color: ${theme.color.neutral3};
      cursor: default;
      pointer-events: none;
    `}
  `}
`
