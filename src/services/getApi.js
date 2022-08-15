import axios from 'axios';

const slug = process.env.REACT_APP_SLUG;
const key = process.env.REACT_APP_KEY;

const baseURl = `https://api.cosmicjs.com/v2/buckets/${slug}/objects?pretty=true&query=%7B"type"%3A"albums"%7D&read_key=${key}&limit=20&props=slug,title,content,metadata,`;
//get data from cosmicjs with axios
const getAll = async () => {
	const res = await axios.get(baseURl);
	return res.data;
};

export { getAll };
