import Axios from "axios";

const request = Axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 10000
})

export default request;
