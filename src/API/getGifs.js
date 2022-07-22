
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=LXBtCy4MGIC7rwrnG1OVmr5APuxHoWua&q=${category}&limit=8`

    const resp = await fetch( url )
        
    const { data = [] } = await resp.json()

    const gifs = data.map( ({id, title, images}) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url
    }))

    return gifs;
    
}