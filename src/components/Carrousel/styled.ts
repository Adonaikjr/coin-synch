import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider'
export const ContainerStyleCarrousel = styled(AwesomeSlider)`
  height: 70vh;
  img {
    height: 100%;
    width: 100%;
  }
  div {
    .awssld__controls button .awssld__controls__arrow-left,
    .awssld__controls button .awssld__controls__arrow-right {
      height: 24px;
      width: 24px;
      display: none;
    }
  }

  .awssld__content {
    background-color: transparent !important;
  }
  .awssld__bullets {
    display: none;
  }

  .page-image-one {
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    section {
      padding: 0.5rem 1rem;
      animation: slideAnimation ease;
      animation-duration: 2s;
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      article {
        display: flex;
        flex-direction: column;
        gap: 24px;
        h1 {
          width: 100%;
          font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
          font-weight: ${(props) => props.theme.FONT_FAMILY.BOLD};
          font-size: 4rem;
          color: ${(props) => props.theme.PRIMARY};
          @media (max-width: 900px) {
            font-size: 2.5rem;
          }
        }
        p {
          color: ${(props) => props.theme.TEXT_BASE};
        }
      }
    }
    @media (max-width: 900px) {
      flex-wrap: wrap;
      height: auto;
      img {
        display: none;
      }
      > section {
        width: 100%;
        height: auto;
        article {
          > button {
            width: 100%;
          }
        }
      }
    }
  }
`
