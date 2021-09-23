import React from 'react'
import styled from 'styled-components'
import {gray} from 'open-color'


const Wrapper = styled.div`
    background-color: ${gray[2]};
    border-radius: 12px;
    padding-top: ${props => props.height + '%'};
    
`

function Image ({ratio=[[{title:'16:9'}]]}) {
    const ratioArr = ratio[0][0].title.split(':')
    const height = Number(ratioArr[1])/Number(ratioArr[0])*100
    return(
        <Wrapper height={height}/>
    )
}

export default Image
