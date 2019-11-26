import axios from 'axios';
import CONFIG_URL from '../../config-url';

const baseDomain = CONFIG_URL;
const baseURL = `${baseDomain}/`;

export default axios.create({
    baseURL
});