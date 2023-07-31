import styled from 'styled-components'

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.PRIMARY};
  color: ${(props) => props.theme.WHITE};
  border: none;
  border-radius: 32px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  transition: 1s;
  animation: pulse 2s infinite;
  animation-delay: 1s;
  transition: 1s;
  width: 17.37rem;
  height: 3rem;
  padding: 14px 24px;
  :hover {
    background-color: ${(props) => props.theme.font_color};
    color: ${(props) => props.theme.base_border};
    transition: 0.5s;
    transform: scale(1.03);
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`
