import React from 'react'
import styled from 'styled-components'
import {gray, black} from 'open-color'
import { ICONS } from '../../constants/icons'

const ItemWrapper = styled.div`
    &+&{
        margin-top: 12px;
    }
`

const Input = styled.input`
    display: none;
    
    & + label span{
        display: inline-flex;
        align-items: center;
        justify-content: center;  
        width: 20px;
        height: 20px;

        margin-right: 8px;
        border-radius: 6px;

        background-color: ${gray[3]};
        background-repeat: no-repeat;
        background-position: center;
        transition: 0.2s;
        svg{
            display: none;
        }
    }
    &:checked + label span{
        background-color: ${gray[9]};
        svg{
            display: inline-block;
        }
    }
`
const Label = styled.label`
    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: 300;
    color: ${black};
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`

function CheckboxItem ({label}) {
    return(
        <ItemWrapper>
            <Input
                type="checkbox"
                id={label}
            />
            <Label htmlFor={label}>
                <span>
                    {ICONS.check}
                </span>
                {label}
            </Label>
        </ItemWrapper>
    )
}

function Checkbox({children=[[{title:'Checkbox'}]]}){
    return(
        <div>
            {children[0].map((item, index) => (
                <CheckboxItem
                    key={item.id ? item.id : index}
                    label={item.title}
                />
            ))}
        </div>
    )
}

export default Checkbox
