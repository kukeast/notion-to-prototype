import React from 'react'
import styled from 'styled-components'
import Elems from './Elems'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const Column = styled.div`
    flex: ${props => props.column.ratio * 100 + '%'};
    > * {
        margin-bottom: 4px;
        :last-child{
            margin-bottom: 0px;
        }
    }
`

function ColumnList ({column_list}) {
    return(
        <Wrapper>
            {column_list[0].map( column =>(
                <Column key={column.id} column={column}>
                    {column.content[0].map( child => (
                        <Elems block={child} key={child.id}/>
                    ))}
                </Column>
            ))}
        </Wrapper>
    )
}

export default ColumnList
