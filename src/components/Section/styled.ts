import styled, { css } from 'styled-components'
interface propsSection {
  activeGradient?: boolean
}

export const ContainerSection = styled.section<propsSection>`
  height: 51.12rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  background: ${(props) =>
    props.activeGradient
      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%)'
      : '#fff'};
  > article {
    width: 43.5rem;
    height: 35.5rem;
    > div {
      display: flex;
      align-items: flex-start;
      gap: 32px;
      flex-wrap: wrap;
    }
    @media (max-width: 900px) {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      > div {
        justify-content: center !important;
      }
    }
  }
  aside {
    width: 25.37rem;
    height: 16.25rem;
    > article {
      ${({ theme }) => css`
        h5 {
          color: ${theme.PRIMARY};
          font-family: ${theme.FONT_FAMILY.REGULAR};
          font-weight: ${theme.FONT_FAMILY.BOLD};
          font-size: ${theme.FONT_SIZE.H5};
          line-height: ${theme.LINE_HEIGHT.H4_L};
        }
        h2 {
          color: ${theme.TEXT_BASE};
          font-family: ${theme.FONT_FAMILY.REGULAR};
          font-weight: ${theme.FONT_FAMILY.BOLD};
          font-size: ${theme.FONT_SIZE.H2};
          line-height: ${theme.LINE_HEIGHT.H2_L};
          letter-spacing: -0.4px;
        }
        p {
          margin-top: 1rem;
          color: ${theme.TEXT_BASE};
          font-family: ${theme.FONT_FAMILY.REGULAR};
          font-size: ${theme.FONT_SIZE.P};
          line-height: ${theme.LINE_HEIGHT.H5_L_P_L};
        }
      `}
      > button {
        margin-top: 40px;
      }
    }
  }

  @media (max-width: 1140px) {
    height: 100%;
    > aside {
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 100%;
      padding: 2rem 1rem;
      > article {
        > button {
          width: 100%;
        }
      }
    }
  }
`
