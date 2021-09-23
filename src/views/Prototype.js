import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {COLOR} from '../constants/color'
import { getBlocks } from "../hooks/getBlocks";
import { ICONS } from '../constants/icons';
import Elems from '../component/published/Elems'
import useAsync from "../hooks/useAsync";
import H1 from '../component/published/H1';
import Button from '../component/published/Button';
import Spacing from '../component/published/Spacing';



const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    box-sizing: border-box;
    margin: auto;
    width: 420px;
    min-height: 100%;
    overflow: scroll;
    > * {
        margin-bottom: 12px;
    }
    padding: 32px 20px;
    background-color: ${COLOR.editorWhite};

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`
const Controller = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 420px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`
const Chevron = styled.div` 
    display: inline-flex;
    border-radius: 20px;
    background-color: #1C1C1ECC;
    cursor: pointer;
    &.left{
        padding: 10px 11px 10px 9px;
    }
    &.right{
        padding: 10px 9px 10px 11px;
    }
`

function Prototype ({match}) {
    const { uri } = match.params;
    const [response] = useAsync(() => getBlocks(uri), [uri])
    const [currentPage, setCurrentPage] = useState(0)
    const [pageLength, setPageLength] = useState(0)
    const history = useHistory()
    useEffect(()=>{
        if(response.data){
            setPageLength(response.data.length - 1)
        }
    }, [response])
    return(
        <Wrapper>
            {response.data 
                ? response.data[currentPage].map( child => (
                    <Elems block={child} key={child.id}/>
                ))
                : response.error
                ? <>
                    <H1>Sorry, Page Not Found..</H1>
                    <Spacing/>
                    <Button children={[[{title: 'Go Back'}]]} onClick={() => history.goBack()}/>
                </>
                : null
            }
            <Controller>
                {currentPage !== 0 && 
                    <Chevron 
                        className='left'
                        onClick={() => setCurrentPage(currentPage-1)}
                    >
                        {ICONS.left}
                    </Chevron>
                }
                <p></p>
                {currentPage !== pageLength && 
                    <Chevron 
                        className='right'
                        onClick={() => setCurrentPage(currentPage+1)}
                    >
                        {ICONS.right}
                    </Chevron>
                }
            </Controller>
        </Wrapper>
    )
}

export default Prototype
