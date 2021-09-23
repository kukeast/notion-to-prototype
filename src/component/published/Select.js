import React from 'react'
import styled from 'styled-components'
import {gray, black} from 'open-color'
import { ICONS } from '../../constants/icons'


const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    border-radius: 12px;
    border: 1px solid ${gray[2]};

    overflow: hidden;
    cursor: pointer;
    :focus-within{
        border: 1px solid ${props => props.theme.primary};
    }
    svg{
        z-index: 0;
        position: absolute;
        right: 16px;
    }
`

const SelectElem = styled.select`
    flex: 1;
    font-size: 16px;
    font-weight: 300;
    color: ${black};

    border: 0;
    padding: 16px;
    
    background: none;

    outline: none;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    ::-ms-expand{ display: none; }
    z-index: 1;

`

function Option ({ label }) {
    return(
        <option value={label}>{label}</option>
    )
}

function Select ({ children }) {
    return(
        <Wrapper>
            <SelectElem name='select'>
                {children[0].map((item, index) => (
                    <Option
                        key={item.id ? item.id : index}
                        label={item.title}
                    />
                ))}
            </SelectElem>
            {ICONS.down}
        </Wrapper>
    )
}

export default Select
