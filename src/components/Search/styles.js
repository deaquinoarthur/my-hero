import styled, { css } from 'styled-components'

export const SearchInputWrapper = styled.div.attrs({
  className: 'SearchInputWrapper'
})`
  ${({ theme }) => css`
    margin-bottom: ${theme.space['16']};
  `}
`

export const InputGroup = styled.div.attrs({
  className: 'InputGroup'
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    position: absolute;
    top: 0.8125rem;
    left: 0.75rem;
    width: 1.875rem;

    ${({ theme }) => css`
      fill: ${theme.color.neutral4};
    `}
  }

  .Button {
    width: 100%;
  }

  ${({ theme }) => css`
    gap: ${theme.space['16']};
  `}

  @media (min-width: 600px) {
    flex-direction: row;

    .Button {
      width: inherit;
    }
  }

  label {
    width: 100%;
  }
`

export const Input = styled.input.attrs({
  className: 'Input'
})`
  ${({ hasIcon, theme }) =>
    theme &&
    css`
      width: 100%;
      height: 3.25rem;
      padding: 1rem 1rem 1rem ${hasIcon ? '3rem' : '1rem'};
      border: none;
      border-radius: 0.25rem;
      font-size: ${theme.font.size.bodyRegular};
      color: ${theme.color.neutral4};

      &::placeholder {
        color: ${theme.color.neutral4};
        font-size: ${theme.font.size.bodyRegular};
      }

      &:-ms-input-placeholder {
        color: ${theme.color.neutral4};
        font-size: ${theme.font.size.bodyRegular};
      }

      &::-ms-input-placeholder {
        color: ${theme.color.neutral4};
        font-size: ${theme.font.size.bodyRegular};
      }
    `}
`

export const ComicList = styled.div.attrs({
  className: 'ComicList'
})`
  ${({ theme }) =>
    theme &&
    css`
      border-radius: 0.25rem;
      background-color: ${theme.color.neutral1};

      ul {
        list-style: none;
      }

      li {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: ${theme.space['24']};
        padding: 2rem;

        &:not(:last-of-type) {
          border-bottom: 1px solid ${theme.color.neutral3};
        }

        &.notFound {
          border-radius: 0.25rem;
          font-weight: bold;
          font-size: ${theme.font.size.heading4};
          background-color: ${theme.color.neutral1};
          color: ${theme.color.primary1};
        }

        @media (min-width: 600px) {
          flex-direction: row;
        }
      }

      img {
        width: 11.25rem;
        height: 260px;
        object-fit: cover;
      }

      .comicInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex: 2;

        *:not(:last-child) {
          ${({ theme }) => css`
            margin-bottom: ${theme.space['8']};
          `}
        }
      }

      .comicInfo__issue {
        gap: 2rem;
        color: ${theme.color.neutral4};
        text-transform: uppercase;
      }

      .comicInfo__description {
        color: ${theme.color.neutral5};
        font-style: italic;
      }

      .buttonGroup {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
        flex: 1;
        margin-left: 0;
        width: 100%;

        @media (min-width: 530px) {
          flex-direction row;
        }

        @media (min-width: 870px) {
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
        }
      }
    `}
`
