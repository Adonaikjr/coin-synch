import styled from 'styled-components'
export const ContainerInput = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.WHITE};
    color: ${(props) => props.theme.GRAY_500};
    padding-left: 0.5rem;
    font-size: 16px;
    border: none;
  }
`
