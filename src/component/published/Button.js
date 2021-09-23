import React from 'react'
import styled from 'styled-components'
import {black, white, gray} from 'open-color'

const ItemWrapper = styled.div`
    &+&{
        margin-top: 12px;
    }
`

const ButtonElem = styled.div`
    color: ${white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25em;
    padding: 18px;
    text-align: center;
    border-radius: 16px;
    background-color: ${gray[9]};
    margin: 0;
    cursor: pointer;

    :hover{
        background-color: ${gray[8]};
    }
    :active{
        background-color: ${black};
    }
`

function ButtonItem ( {label, onClick} ) {
    return(
        <ItemWrapper>
            <ButtonElem onClick={onClick}>
                {label}
            </ButtonElem>
        </ItemWrapper>
        
    )
}

function Button ( { children=[[{title: 'button'}]], onClick } ) {
    return(
        <div>
            {children[0].map((item, index) => (
                <ButtonItem
                    key={item.id ? item.id : index}
                    label={item.title}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}

export default Button
