import styled from 'styled-components'

export const ContainerLayoutDefault = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s;
`
export const ContainerLoading = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 900px) {
    img {
      width: 90%;
    }
    p {
      width: 90%;
      text-align: center;
    }
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
