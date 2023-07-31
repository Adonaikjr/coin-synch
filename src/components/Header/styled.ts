import styled, { keyframes, css } from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.WHITE};
  z-index: 100;
  @media (max-width: 900px) {
    padding: 0.5rem;
    position: static;
  }
`
export const ContentHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    display: flex;
    gap: 4rem;
  }
`
export const NavigateBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  > img {
    width: 124px;
    height: 21px;
    margin-right: 16px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
interface Props {
  active?: boolean
}

export const NewLink = styled.div<Props>`
  padding: 8px 16px;
  border-radius: 32px;
  width: 6.25rem;
  text-align: center;
  cursor: pointer;
  ${({ theme, active }) => css`
    color: ${active ? theme.WHITE : theme.BLACK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: ${theme.LINE_HEIGHT.LABEL_L};
    background-color: ${active ? theme.PRIMARY : 'transparent'};
  `}
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: none;
  }
`
export const ContainerHamburger = styled.div`
  display: none;
  z-index: 99999;
  @media (max-width: 900px) {
    display: block;
  }
`
export const Rotate = styled.div`
  display: inline-block;
  animation: rotate 7s linear infinite;
  font-size: 1.2rem;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
export const slideAnimation = keyframes`
  from {
    transform: translateX(500%);
  }
  to {
    transform: translateX(0%);
  }
`
export const ContainerAnimated = styled.div`
  position: absolute;
  animation: ${slideAnimation} 0.7s ease;
  background-color: azure;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 80%;
  }
  > div {
    img {
      height: 8rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    li {
      margin: 0.5rem;
      height: 3rem;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: solid 1px #ffff;
      width: 90%;
      color: #fff;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
