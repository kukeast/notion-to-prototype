import React from 'react'
import styled from 'styled-components'
import { ICONS } from '../../constants/icons'
import {COLOR} from '../../constants/color'

const Wrapper = styled.div`
    border: 2px solid ${COLOR.editorGray8};
    background-color: ${COLOR.editorGray8};
    border-radius: 16px;
    padding: 20px;
    text-align: center;
`
const Title = styled.p`
    color: ${COLOR.editorWhite};
    font-size: 16px;
    font-weight: 400;
    margin: 6px 0 0;
`
function Error () {
    return(
        <Wrapper>
            {ICONS.alert}
            <Title>Please check again notion url</Title>
        </Wrapper>
    )
}

export default Error
