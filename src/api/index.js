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