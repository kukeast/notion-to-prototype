import axios from 'axios';

export async function getBlocks(url) {
    const response = await axios.get(`https://notion-api.splitbee.io/v1/page/${url}`);
    const createRowData = (children, isPage) => {
        const cards = [[]]
        var index = 0
        children.forEach( child => {
            const block = {}
            if(response.data[child] && response.data[child].value){
                block.type = response.data[child].value.type
                block.id = child
                if(response.data[child].value.properties){
                    block.title = response.data[child].value.properties.title[0][0]
                    if(response.data[child].value.properties.title[0][1] && response.data[child].value.properties.title[0][1][0][0]){
                        block.type = 'tag'
                    }
                }
                if(block.type === 'text' && !response.data[child].value.properties){
                    block.type = 'spacing'
                }
                if(block.type === 'column'){
                    if(response.data[child].value.format){
                        block.ratio = response.data[child].value.format.column_ratio
                    }else{
                        block.ratio = 1;
                    }
                }
                if(response.data[child].value.type !== 'page' && response.data[child].value.type !== 'toggle' && response.data[child].value.content){
                    block.content = createRowData(response.data[child].value.content, false) 
                }
                if(response.data[child].value.type === 'divider' && isPage){
                    index++
                    cards[index] = []
                }else{
                    cards[index].push(block)
                }
            }
        })
        
        return cards
    }

    return createRowData(response.data[Object.keys(response.data)[0]].value.content, true)
}