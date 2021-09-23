import React from 'react'
import styled from 'styled-components'
import {gray} from 'open-color'
import { ICONS } from '../../constants/icons'

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${gray[2]};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Avator () {
    return(
        <Wrapper>
            {ICONS.user}
        </Wrapper>
    )
}

export default Avator
