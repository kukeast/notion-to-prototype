import { useEffect, useState } from "react";
import { useHistory } from 'react-router'
import CopyToClipboard from "react-copy-to-clipboard";
import TextField from "../component/editor/TextField";
import Error from "../component/editor/Error";
import IconButton from "../component/editor/IconButton";
import Card from "../component/editor/Card";
import Prototype from "../component/editor/Prototype";
import Button from "../component/editor/Button";
import useAsync from "../hooks/useAsync";
import { getBlocks } from "../hooks/getBlocks";
import styled from 'styled-components'

const RightPanel = styled.div`
    position: fixed;
    right: 160px;
    left: 460px;
    top: 30px;
    bottom: 30px;
    display: flex;

    > div{
        margin: auto;
        width: 375px;
        height: 667px;
        overflow: scroll;
    }
`
const LeftPanel = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;
`
const RightTop = styled.div`
    position: fixed;
    right: 30px;
    top: 30px;
`
const LinkInput = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

function Editor({match}) {
    const { uri } = match.params;
    const history = useHistory()
    const [url, setUrl] = useState(uri)
    const [response, repatchResponse] = useAsync(() => getBlocks(url), [url])
    const [currentPage, setCurrentPage] = useState(0)
    const [copied, setCopied] = useState(false)

    const splitUrl = (url) => {
        const urlArr = url.split('/')
        return urlArr[urlArr.length-1]
    }

    const copyUrl = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    useEffect(()=>{
        setUrl(uri)
    }, [uri])

    const handleBlur = e => {
        const url = splitUrl(e.target.value)
        if(url){
            history.push('/preview/' + url)
        }
    }
    return(
        <>
            <LeftPanel>
                <LinkInput>
                    <TextField 
                        onBlur={handleBlur} 
                        onKeyDown={ e => e.key === 'Enter' && e.target.blur()} 
                        defaultValue={url}
                    />
                    <IconButton onClick={repatchResponse}/>
                </LinkInput>
                {response.data 
                    ? response.data.map( (blocks, index) => (
                        <Card 
                            blocks={blocks} 
                            error={response.error} 
                            key={index} 
                            onClick={() => setCurrentPage(index)}
                            selected={currentPage === index}
                        />
                    ))
                    : response.error
                    ? <Error/>
                    : null
                }
            </LeftPanel>
            <RightPanel>
                {response.data && <Prototype cards={response.data} currentPage={currentPage}/>}
            </RightPanel>
            <RightTop>
                <CopyToClipboard text={'localhost:3000/prototype/' + url} onCopy={copyUrl}>
                    <Button label='Copy link' isCopied={copied}/>
                </CopyToClipboard>
            </RightTop> 
        </>
    )
}

export default Editor;
