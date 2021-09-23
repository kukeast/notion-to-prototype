import React from 'react'
import styled, {css} from 'styled-components'
import {COLOR} from '../../constants/color'
import {indigo, teal} from 'open-color'


const Wrapper = styled.div`
    width: 110px;
    border-radius: 16px;
    padding: 16px;
    
    box-sizing: border-box;
    color: ${COLOR.editorWhite};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    line-height: 22px;
    
    cursor: pointer;
    transition: 0.3s;

    ${props => props.isCopied 
        ? css`
            background-color: ${teal[6]};
            :hover{
                background-color: ${teal[8]};
            }
            :active{
                background-color: ${teal[7]};
            }
        `
        : css`
            background-color: ${indigo[7]};
            :hover{
                background-color: ${indigo[9]};
            }
            :active{
                background-color: ${indigo[8]};
            }
        `
    }
    
`

function Button ( {label, onClick, isCopied} ) {
    return(
        <Wrapper onClick={onClick} isCopied={isCopied}>
            {isCopied ? 'Copied!' : label}
        </Wrapper>
    )
}

export default Button
