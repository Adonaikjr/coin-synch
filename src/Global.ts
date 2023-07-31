import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    body{
        margin: 0 auto;
        color: ${({ theme }) => theme.font_color};
        width: 100%;
        font-family: ${(props) => props.theme.font_poppins};
        a{
            text-decoration: none;
        }
        p {
            font-size: 16px;
            line-height: 24px;
        }
    }
`
