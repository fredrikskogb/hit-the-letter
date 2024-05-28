import axios from 'axios';

const baseDomain = process.env.CONFIG_URL;
const baseURL = `${baseDomain}/`;

export default axios.create({
    baseURL
});