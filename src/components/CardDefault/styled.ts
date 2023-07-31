import styled, { css } from 'styled-components'

export const ContainerCardDefault = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999;
  background-color: blue;
  position: fixed;
  background-color: rgba(10, 23, 55, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  @media (max-width: 1300px) {
    width: 100%;
  }
  h2 {
    width: 100%;
    text-align: center;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-weight: 400;
      font-size: ${theme.FONT_SIZE.H4};
      line-height: ${theme.LINE_HEIGHT.H4_L};
      > strong {
        > span {
          color: ${theme.PRIMARY};
        }
        color: ${theme.TEXT_BASE};
      }
    `}
  }
  form {
    > span {
      width: 100%;
    }
    padding: 32px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 468px;
    fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      border: none;
      width: 100%;

      label {
        width: 100%;
        input {
          border: solid 1px #e0deea;
        }
      }
      button {
        width: 100%;
      }
    }
  }
`
