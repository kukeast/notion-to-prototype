import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {gray, white} from 'open-color'

const SwicthElem = styled.div`
    display: inline-flex;
    align-items: center;

    width: 48px;
    height: 30px;

    border-radius: 24px;

    transition: 0.3s;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    ${props => props.active ? css`
        background-color: ${gray[9]};
        div{
            transform: translateX(18px);
        }
    ` : css`
        background-color: ${gray[3]};
        div{
            transform: translateX(0);
        }
    `}

`
const Toggle = styled.div`
    width: 24px;
    height: 24px;

    margin: 3px;
    border-radius: 12px;

    background-color: ${white};
    transition: 0.3s;
`

function Switch () {

    const [active, setActive] = useState(true)

    return(
        <SwicthElem 
            active={active} 
            onClick={() => setActive(!active)}
        >
            <Toggle/>
        </SwicthElem>
    )
}

export default Switch
