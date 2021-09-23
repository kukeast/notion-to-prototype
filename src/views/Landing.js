import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import TextField from '../component/editor/TextField'
import { COLOR } from '../constants/color'
import Button from "../component/editor/Button";

const Wrapper = styled.div`
    font-size: 40px;
    color: white;
`

const Header = styled.div`
    text-align: center;
    padding: 120px 0;
`

const Title = styled.h1`
    font-family: 'Inter';
    font-size: 50px;
    font-weight: 500;
    margin: 0;
`
const SubTitle = styled.h2`
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 300;
    color: ${COLOR.editorGray4};
    margin: 8px 0;
`
const UrlBox = styled.div`
    display: inline-flex;
    width: 480px;
    margin-top: 40px;
    gap: 12px;
`

function Landing () {
    const [url, setUrl] = useState('')
    const history = useHistory()

    const linkTo = () => {
        if(url){
            history.push('/preview/' + url)
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.target.blur()
            linkTo()
        }
    }
    
    const handleBlur = (e) => {
        const urlArr = e.target.value.split('/')
        setUrl(urlArr[urlArr.length-1])
    }
    
    return(
        <Wrapper> 
            <Header>
                <Title>Notion -&gt; Prototype</Title>
                <SubTitle>Just enter notion url to create a prototype</SubTitle>
                <UrlBox>
                    <TextField 
                        onBlur={handleBlur} 
                        onKeyDown={handleKeyDown} 
                    />
                    <Button label='Create' onClick={linkTo}/>
                </UrlBox>
            </Header>
        </Wrapper>
    )
}

export default Landing
