import React from 'react'
import styled from 'styled-components'
import { PUBLISH_ICONS } from '../../constants/icons'

const Wrapper = styled.div`
    display: flex;
    gap: 12px;
`

function IconItem ({name}){
    return(
        PUBLISH_ICONS[name]
    )
}

function Icon ( { children=[[{title: 'heart'}]]} ) {
    return(
        <Wrapper>
            {children[0].map((item, index) => (
                <IconItem 
                    key={index}
                    name={item.title}
                />
            ))}
        </Wrapper>
    )
}

export default Icon
