import React from 'react'
import styled from 'styled-components'
import {gray, black} from 'open-color'

const ItemWrapper = styled.div`
    &+&{
        margin-top: 12px;
    }
`

const InputWrapper = styled.div`
    display: flex;
    border-radius: 16px;
    border: 0.1rem solid ${gray[3]};
    overflow: hidden;

    :focus-within{
        border: 0.1rem solid ${gray[9]};
    }
`

const InputElem = styled.input`
    height: 18px;

    flex: 1;
    font-size: 16px;
    font-weight: 300;
    color: ${black};

    border: 0;
    padding: 16px;
    outline: none;
    background: none;

    ::placeholder{
        color: ${gray[6]};
    }
`
function TextFieldItem ({placeholder}) {
    return(
        <ItemWrapper>
            <InputWrapper>
                <InputElem
                    type="text"
                    name='text'
                    placeholder={placeholder}
                />
            </InputWrapper>
        </ItemWrapper>
    )
}

function TextField ({children=[[{title: 'placeholder'}]]}) {
    return(
        <div>
            {children[0].map((item, index) => (
                <TextFieldItem
                    key={item.id ? item.id : index}
                    placeholder={item.title}
                />
            ))}
        </div>
    )
}


export default TextField
