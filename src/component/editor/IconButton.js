import React from 'react'
import styled from 'styled-components'
import {COLOR} from '../../constants/color'
import {ICONS} from '../../constants/icons'


const Wrapper = styled.div`
    display: flex;
    border-radius: 16px;
    padding: 15px;
    background-color: ${COLOR.editorGray8};
    cursor: pointer;
    transition: 0.3s;
    :hover{
        background-color: ${COLOR.editorGray7};
    }
    :active{
        background-color: ${COLOR.editorGray8};
    }
`

function IconButton ( {onClick} ) {
    return(
        <Wrapper onClick={onClick}>
            {ICONS.refresh}
        </Wrapper>
    )
}

export default IconButton
