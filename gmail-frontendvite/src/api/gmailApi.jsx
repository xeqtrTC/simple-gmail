import axios from 'axios';
import Cookies from 'js-cookie';

// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }

// const test = getCookie('csrftoken')


const gmailApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
    }
 
    // httpsAgent: new https.Agent({ rejectUnauthorized: false, requestCert: true, keepAlive: true})
    
})
export const getCSRFToken = async () => {
    const response = await gmailApi.get('/token');
    return response.data
}


export const viewInfo = async () => {
    const response = await gmailApi.get('/info')
    return response.data;
}

export const getEmails = async () => {
    const response = await gmailApi.get('/emailsOfUser')
    return response.data
}

export const whoAmI = async () => {
    const response = await gmailApi.get('/info')
    return response.data
}

export const addGmail = async (gmail) => {
    return await gmailApi.post('/addgmail', gmail)
}

export const getEmailById = async (id) => {
    console.log(id)
    const response = await gmailApi.get(`email/${id}`)
    return response.data
}

export const logoutUser = async () => {
    return  await gmailApi.post('/logout')
}

export const addUser = async (user) => {
    return await gmailApi.post('/addUser', user)
}
export const loginUser = async (user) => {
    return await gmailApi.post('/login', user)
}
export default gmailApi