import styled, { keyframes, css } from 'styled-components'

export const ContainerApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const animateCardGradient = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

  `

interface propsSection {
  background?: any
  colorBack?: any
}

export const ContainerContentSection = styled.div<propsSection>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: ${(props) =>
    props.background
      ? (props) => props.colorBack
      : 'linear-gradient(-45deg, #DAA520, #111111)'};
  animation: ${animateCardGradient} 15s ease infinite;
  background-size: 400% 400%;
  padding: 2rem 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3rem;
  }
  h1 {
    width: 100%;
    font-family: ${(props) => props.theme.font_poppins};
    font-weight: ${(props) => props.theme.font_600_semiBold};
    text-align: center;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: ${(props) => props.theme.font_p};
    font-family: ${(props) => props.theme.font_poppins};
    font-weight: ${(props) => props.theme.fonts_400};
    padding: 0.5rem 1rem;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
  img {
    width: 30rem;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: 900px) {
    h1 {
      text-align: center;
    }
    img {
      padding: 0.5rem 1rem;
      width: 100%;
    }
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
`
export const ChildContainerContentSection = styled(ContainerContentSection)`
  flex-direction: row-reverse;
`
export const ContainerImage = styled.img`
  width: 100%;
  @media (max-width: 900px) {
  }
`
export const Rotate = styled.div`
  display: inline-block;
  animation: rotate 1s linear infinite;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

export const ContentList = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  height: 100%;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    border: none;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    border: none;
    > button {
      border: none;
      background-color: #149e55;
      border-radius: 32px;
      padding: 8px 16px;
      text-align: center;
      color: ${(props) => props.theme.WHITE};
    }
  }

  tr:nth-child(even) {
    background-color: #f6f6f6;
  }
  tfoot {
    text-align: center;
    width: 100%;
    tr,
    td {
      width: 100%;
      text-align: center;
      > button {
        background-color: transparent;
        border: none;
        ${({ theme }) => css`
          color: ${theme.PRIMARY};
          font-size: ${theme.FONT_FAMILY.REGULAR};
          font-size: ${theme.FONT_SIZE.P};
          line-height: ${theme.LINE_HEIGHT.H5_L_P_L};
          :hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        `}
      }
    }
  }
`
