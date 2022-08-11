import Cosmic from 'cosmicjs';
import axios from 'axios';

const api = Cosmic();
const bucket = api.bucket({
	slug: 'aimer-api-production',
	read_key: 'dywj6MUr7worMNLjqbeNJv04q5CDqp28ryPGiXwNbvhTAN679o',
});
const fetchPosts = async () => {
	const data = await bucket.getObjects({
		query: {
			type: 'albums',
		},
		props: 'slug,title,metadata', // Limit the API response data by props
	});
	return data;
};

const slug = 'aimer-api-production';
const key = 'dywj6MUr7worMNLjqbeNJv04q5CDqp28ryPGiXwNbvhTAN679o';
const baseURl = `https://api.cosmicjs.com/v2/buckets/${slug}/objects?pretty=true&query=%7B"type"%3A"albums"%7D&read_key=${key}&limit=20&props=slug,title,content,metadata,`;

const getAll = async () => {
	const res = await axios.get(baseURl);
	return res.data;
};

export { fetchPosts, getAll };
