import styled, {css} from 'styled-components'

export const InputWrapper = styled.div.attrs({
  className: 'InputWrapper',
})`
  position: relative;

  svg {
    position: absolute;
    top: 0.8125rem;
    left: 0.75rem;

    width: 1.875rem;

    ${({ theme }) => css`
      fill: ${theme.color.neutral4};
    `}
  }
`

export const Input = styled.input.attrs({
  className: 'Input',
})`
  ${({ theme }) => theme && css`
    width: 100%;
    height: 3.25rem;
    padding: 1rem;
    border: none;
    border-radius: 0.25rem;
    margin-bottom: ${theme.space['16']};

    font-size: ${theme.font.size.bodyRegular};
    color: ${theme.color.neutral4};

    &::placeholder {
    padding-left: 40px;
      color: ${theme.color.neutral4};
      font-size: ${theme.font.size.bodyRegular};
    }

    &:-ms-input-placeholder {
    padding-left: 40px;
      color: ${theme.color.neutral4};
      font-size: ${theme.font.size.bodyRegular};
    }

    &::-ms-input-placeholder {
    padding-left: 40px;
      color: ${theme.color.neutral4};
      font-size: ${theme.font.size.bodyRegular};
    }
  `}
`

export const ComicList = styled.div.attrs({
  className: 'ComicList',
})`
  ${({ theme }) => theme && css`
    border-radius: 0.25rem;
    background-color: ${theme.color.neutral1};

    ul { list-style: none; }

    li {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      gap: ${theme.space['24']};
      padding: 2rem;

      &:not(:last-of-type) {
        border-bottom: 1px solid ${theme.color.neutral3};
      }

      &.notFound {
        border-radius: 0.25rem;
        background-color: ${theme.color.danger1};
        color: ${theme.color.neutral1};
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
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      margin-left: 0;
      width: 100%;

      .Button {
        width: 100%;
      }

      @media (min-width: 440px) {
        flex-direction: row;
        width: auto;

        .Button {
          width: auto;
        }
      }

      @media (min-width: 709px) {
        flex-direction: column;
        align-items: flex-end;
        margin-left: auto;
      }
    }
  `}
`
