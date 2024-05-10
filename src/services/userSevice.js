import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/Login', { email, password });
}

const getAllUser = (inputId) => {
    return axios.get(`/api/getAllUser?id=${inputId}`)
}

const createNewUserSevice = (data) => {
    console.log('check Data from sevice:', data)
    return axios.post(`/api/create-new-user`, data)
}
const deleteUserSevice = (userId) => {
    return axios.delete('/api/delete-new-user', {
        data: {
            id: userId
        }
    })
}

const editUserSevice = (inputData) => {
    return axios.put('/api/edit-new-user', inputData)
}

export { handleLoginApi, getAllUser, createNewUserSevice, deleteUserSevice, editUserSevice };