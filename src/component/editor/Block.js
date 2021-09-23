import React from 'react'
import styled, { css } from 'styled-components'
import {COLOR} from '../../constants/color'
import {red} from 'open-color'

const Wrapper = styled.div`
    color: ${COLOR.editorWhite};
    &+&{
        margin-top: 12px;
    }
    ${props => props.block.type === 'column' && css`
        flex: ${props.block.ratio * 100 + '%'};
        margin-top: 0 !important;
    `}
    ${props => props.block.type === 'spacing' && css`
        height: 18px;
    `}
`
const Title = styled.p`
    margin: 0;
    &.header, &.sub_header, &.sub_sub_header{
        font-weight: 500;
        line-height: 1.25em;
    }
    &.header{
        font-size: 24px;
    }
    &.sub_header{
        font-size: 20px;
    }
    &.sub_sub_header{
        font-size: 16px;
    }
    &.text{
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6em;
    }
    &.tag{
        display: inline-block;
        font-family: 'SourceCodeProMedium';
        font-size: 16px;
        color: ${red[6]};
        background-color: ${COLOR.editorGray7};
        padding: 4px 6px;
        border-radius: 6px;
    }
    &.divider{
        display: none;
    }
    
`
const Tab = styled.div`
    padding-left: 30px;
    div:first-child{
        margin-top: 12px;
    }
`
const Column = styled.div`
    &.column_list{
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
`


function Block({block}) {
    return(
        <Wrapper block={block}>
            {block.title && <Title className={block.type}>{block.title}</Title>}
            {block.content 
                ? block.type === 'column_list' || block.type === 'column' 
                    ? <Column className={block.type}>
                        {block.content[0].map( child => (
                            <Block block={child} key={child.id}/>
                        ))}
                    </Column>
                    : <Tab>
                        {block.content[0].map( child => (
                            <Block block={child} key={child.id}/>
                        ))}
                    </Tab>  
                : null
            }
        </Wrapper>
    )
}

export default Block
