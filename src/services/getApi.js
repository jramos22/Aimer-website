import axios from 'axios';

const slug = process.env.REACT_APP_SLUG;
const key = process.env.REACT_APP_KEY;

const baseURl = `https://api.cosmicjs.com/v2/buckets/${slug}/objects?pretty=true&query=%7B"type"%3A"albums"%7D&read_key=${key}&limit=20&props=id,metadata.name,metadata.date,metadata.img_name.imgix_url,metadata.songs.song.metadata.name,metadata.songs.song.metadata.img_name.imgix_url,metadata.songs.song.metadata.song.url,`;
//get data from cosmicjs with axios
const getAll = async () => {
	const res = await axios.get(baseURl);
	return res.data;
};

export { getAll };
