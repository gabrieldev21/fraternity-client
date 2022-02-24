import Axios from 'axios';

import { baseUrl } from 'utils/config';

Axios.defaults.baseURL = baseUrl;

export default Axios;
