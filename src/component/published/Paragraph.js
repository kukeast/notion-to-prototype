import React from 'react'
import styled from 'styled-components'
import {black} from 'open-color'

const Wrapper = styled.p`
    color: ${black};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6em;

    margin: 0;
`

function Paragraph ( {children} ) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Paragraph
