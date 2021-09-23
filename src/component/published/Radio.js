import React from 'react'
import styled from 'styled-components'
import {gray, black, white} from 'open-color'

const ItemWrapper = styled.div`
    &+&{
        margin-top: 12px;
    }
`

const Input = styled.input`
    display: none;
    & + label > span{
        display: inline-block;
        width: 20px;
        height: 20px;

        padding: 6px;
        box-sizing: border-box;
        margin-right: 8px;
        border-radius: 10px;

        background-color: ${gray[3]};
        transition: 0.2s;

        & > span{
            display: none;
        }
    }
    &:checked + label span{
        background-color: ${gray[9]};
        span{
            display: block;
            width: 8px;
            height: 8px;

            border-radius: 4px;
            background-color: ${white};
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

function RadioItem ({label, name, defaultChecked}){
    return(
        <ItemWrapper>
            <Input
                type="radio"
                id={label}
                name={name}
                value={label}
                defaultChecked={defaultChecked}
            />
            <Label htmlFor={label}>
                <span><span></span></span>
                {label}
            </Label>
        </ItemWrapper>
    )
}

function Radio ({children=[[{title:'Radio'}]], name='name'}) {
    return(
        <div>
            {children[0].map((item, index) => (
                <RadioItem 
                    key={item.id ? item.id : index}
                    value={item.id}
                    label={item.title}
                    name={name}
                    defaultChecked={index === 0 && true}
                />
            ))}
        </div>
    )
}

export default Radio
