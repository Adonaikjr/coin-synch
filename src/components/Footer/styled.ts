import styled, { css } from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  //background:   ${(props) => props.theme.PRIMARY_500};
  background: linear-gradient(225deg, #c18020 0%, #eea231 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14.94rem;
  height: 43vh;
  flex-wrap: wrap;

  > section {
    z-index: 1;
    width: 30%;
    ${({ theme }) => css`
      h4 {
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.H4};
        line-height: ${theme.LINE_HEIGHT.H4_L};
        color: #ffe1b5;
      }
      h2 {
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.H2};
        line-height: ${theme.LINE_HEIGHT.H2_L};
        color: ${theme.WHITE};
      }
      p {
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.P};
        line-height: ${theme.LINE_HEIGHT.H5_L_P_L};
        color: ${theme.WHITE};
      }
    `}
  }
  > form {
    width: 30%;
    z-index: 1;
    > fieldset {
      border: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 21px;
      > label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        ${({ theme }) => css`
          font-family: ${theme.FONT_FAMILY.REGULAR};
          font-size: ${theme.FONT_SIZE.LABEL};
          line-height: ${theme.LINE_HEIGHT.LABEL_L};
          color: ${theme.WHITE};
        `}
      }
      button {
        width: 100%;
      }
    }
  }
  img {
    position: absolute;
    max-width: 1440px;
    width: 98%;
  }
  @media (max-width: 900px) {
    height: 100%;
    gap: 2rem;
    section,
    form {
      width: 100%;
      padding: 0.5rem 1rem;
    }
  }
`
