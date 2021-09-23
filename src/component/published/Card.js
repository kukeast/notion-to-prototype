import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color'

const Wrapper = styled.div`
    padding: 24px 20px;
    border-radius: 16px;
    background-color: ${COLOR.editorWhite};
    box-shadow: 0px 4px 16px 0px #2125291f;
    > * {
        margin-bottom: 4px;
        :last-child{
            margin-bottom: 0px;
        }
    }

`

function Card ({children}) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Card
