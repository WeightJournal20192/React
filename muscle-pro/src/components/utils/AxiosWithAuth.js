import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://weight-lifting1.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}
export default axiosWithAuth;