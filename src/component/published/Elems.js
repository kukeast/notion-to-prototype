import React from 'react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import Paragraph from './Paragraph'
import Spacing from './Spacing'
import Button from './Button'
import TextField from './TextField'
import ColumnList from './ColumnList'
import Card from './Card'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Image from './Image'
import Switch from './Switch'
import Avator from './Avator'
import Select from './Select'
import Icon from './Icon'


function Elems({block}) {
    const blockType = {
        header : <H1>{block.title}</H1>,
        sub_header: <H2>{block.title}</H2>,
        sub_sub_header: <H3>{block.title}</H3>,
        text: <Paragraph>{block.title}</Paragraph>,
        spacing: <Spacing/>,
        tag: block.title === 'button'
            ? <Button children={block.content}/>
            : block.title === 'textField'
            ? <TextField children={block.content}/>
            : block.title === 'card'
            ? <Card>
                {block.content[0].map( child => (
                    <Elems block={child} key={child.id}/>
                ))}
            </Card>
            : block.title === 'checkbox'
            ? <Checkbox children={block.content}/>
            : block.title === 'switch'
            ? <Switch/>
            : block.title === 'image'
            ? <Image ratio={block.content}/>
            : block.title === 'avator'
            ? <Avator/>
            : block.title === 'radio'
            ? <Radio children={block.content} name={block.id}/>
            : block.title === 'select'
            ? <Select children={block.content}/>
            : block.title === 'icon'
            ? <Icon children={block.content}/>
            : null,
        column_list: <ColumnList column_list={block.content}/>
    }
    return(
        <>
            {blockType[block.type] ? blockType[block.type] : <p>{block.type}: {block.title}</p>}
        </>
    )
}

export default Elems
