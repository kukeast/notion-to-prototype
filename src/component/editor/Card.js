import React from 'react'
import styled, { css } from 'styled-components'
import {COLOR} from '../../constants/color'
import {indigo} from 'open-color'
import Block from "./Block"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    border: 2px solid ${COLOR.editorGray8};
    background-color: ${COLOR.editorGray8};
    border-radius: 16px;
    padding: 20px;

    transition: 0.2s;
    :hover{
        border: 2px solid ${COLOR.editorGray7};
    }
    :active{
        background-color: ${COLOR.editorGray8};
    }
    ${props => props.selected && css`
        border: 2px solid ${indigo[8]};
        :hover{
            border: 2px solid ${indigo[6]};
        }
    `}
    cursor: pointer;
`

function Card ({ blocks, onClick, selected }) {
    return(
        <Wrapper onClick={onClick} selected={selected}>
            {blocks.map( child => (
                <Block block={child} key={child.id}/>
            ))}
        </Wrapper>
    )
}

export default Card
