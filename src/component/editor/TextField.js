import React from 'react'
import styled from 'styled-components'
import {COLOR} from '../../constants/color'
import {ICONS} from '../../constants/icons'

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 1.2rem;
    overflow: hidden;
    background-color: ${COLOR.editorGray8};
    transition: 0.3s;
    :hover{
        background-color: ${COLOR.editorGray7};
    }
    :focus-within{
        background-color: ${COLOR.editorGray8};
    }
    svg{
        padding-left: 16px;
    }
`

const InputElem = styled.input`
    flex: 1;
    font-size: 16px;
    color: ${COLOR.editorWhite};
    height: 22px;
    border: 0;
    padding: 16px 16px 16px 10px;
    outline: none;
    background: none;

    ::placeholder{
        color: ${COLOR.editorGray4};
    }
`
function TextField ({onBlur, onKeyDown, defaultValue, ...rest }) {
    return(
        <Wrapper>
            {ICONS.link}
            <InputElem
                type="url"
                name='link'
                placeholder='my.notion.site/...'
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                defaultValue={defaultValue}
                {...rest}
            />
        </Wrapper>
    )
}

TextField.defaultProps={
    onChange: null
}

export default React.memo(TextField)
