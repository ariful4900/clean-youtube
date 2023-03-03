import axios from "axios";

const key = import.meta.env.VIT_YOUTUBE_API_KEY;

const getPlaylistItem = async(playlistId, pageToken="", result=[])=>{
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}&maxResults=50`;

    const {data}=await axios.get(URL);
    result=[...result, ...data.items];

    useInsertionEffect(data.nextPageToken){
        result=getPlaylistItem(playlistId, data.nextPageToken, result);
    }

    return result;
}

const getPlaylist = async(playlistId)=>{
    const URL =`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

    const {data}=await axios.get(URL);
    let playlistItems =await getPlaylistItem(playlistId);

    const {
        title: playlistTitle,
        description: playlistDescription,
        thumbnails,
        channelId,
        channelTitle
    }= data?.items[0]?.snippet;

    playlistItems=playlistItems.map(item=>{
        const {title, description, thumbnails: {standard}}=item.snippet;

        return {title, description, thumbnails: standard, contentDetails: item.contentDetails}
    });

    return {
        playlistId, playlistTitle, playlistDescription, playlistThumbnail: thumbnails.standard,
        channelId,channelTitle, playlistItems
    }
}