import styled, { css } from 'styled-components'

interface propsStyle {}

export const ContainerCard = styled.div<propsStyle>`
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);
  div {
    width: 14rem;
    display: flex;
    flex-direction: column;
    gap: 1px;
    img {
      height: 64px;
      width: 64px;
      margin-bottom: 1rem;
    }
    ${({ theme }) => css`
      p {
        color: ${theme.TEXT_BASE};
        margin-top: 8px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: 400;
        line-height: ${theme.LINE_HEIGHT.H5_L_P_L};
        font-size: ${theme.FONT_SIZE.LABEL};
      }
      h4 {
        color: ${theme.TEXT_BASE};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_FAMILY.BOLD};
        line-height: ${theme.LINE_HEIGHT.H4_L};
        font-size: ${theme.FONT_SIZE.H4};
      }
      span {
        color: ${theme.PRIMARY};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_FAMILY.BOLD};
        line-height: ${theme.LINE_HEIGHT.H5_L_P_L};
        font-size: ${theme.FONT_SIZE.P};
      }
    `}
  }
  @media (max-width: 900px) {
  }
`
