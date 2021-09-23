import React from 'react'
import styled from 'styled-components'
import {COLOR} from '../../constants/color'
import Elems from '../published/Elems'

const Wrapper = styled.div`
    > * {
        margin-bottom: 8px;
    }
    padding: 32px 20px;
    background-color: ${COLOR.editorWhite};
`
function Prototype ({cards, currentPage}) {
    return(
        <Wrapper>
            {cards[currentPage].map( child => (
                <Elems block={child} key={child.id}/>
            ))}
        </Wrapper>
    )
}

export default Prototype
