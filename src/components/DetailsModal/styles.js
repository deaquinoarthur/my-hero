import styled, { css } from 'styled-components'

export const DetailsModal = styled.div.attrs({
  className: 'DetailsModal',
})`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;

  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  cursor: pointer;

  .Container {
    max-width: 56.25rem;
  }

  @media (min-width: 768px) {
    align-items: center;
  }
`

export const Wrapper = styled.div.attrs({
  className: 'DetailsModal__Wrapper',
})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;

  cursor: default;

  svg {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;

    width: 2.5rem;

    cursor: pointer;
  }

  ${({ theme }) => css`
    padding: ${theme.space['32']};

    background-color: ${theme.color.neutral1};

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      gap: ${theme.space['24']};
    }

    .details__img {
      width: 200px;
      margin-bottom: ${theme.space['16']};
      border-radius: 0.25rem;

      @media (min-width: 768px) {
        width: 280px;
      }
    }
  `}
`

export const Info = styled.div.attrs({
  className: 'DetailsModal__Info',
})`
  ${({ theme }) => css`
    h1 {
      margin-bottom: ${theme.space['8']};

      font-size: ${theme.font.size.heading5};

      @media (min-width: 768px) {
        margin-bottom: ${theme.space['24']};

        font-size: ${theme.font.size.heading4};
      }
    }
  `}
`

export const InfoSection = styled.section.attrs({
  className: 'DetailsModal__InfoSection'
})`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: ${theme.space['8']};
    margin-bottom: ${theme.space['16']};
  `}
`

export const InfoGroup = styled.div.attrs({
  className: 'DetailsModal__InfoGroup',
})`
  &.published { grid-column: 1/-1; }

  ${({ theme }) => css`
    h2 { font-size: ${theme.font.size.heading6}; }

    p { color: ${theme.color.neutral4}; }
  `}
`

export const Description = styled.p.attrs({
  className: 'DetailsModal__Description',
})`
  ${({theme}) => css`
    font-size: ${theme.font.size.bodySmall};
  `}
`
