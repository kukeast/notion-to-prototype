import React from 'react'
import styled from 'styled-components'
import {black} from 'open-color'

const Wrapper = styled.p`
    color: ${black};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.25em;

    margin: 0;
`

function H2 ( {children} ) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default H2
