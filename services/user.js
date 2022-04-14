import axios from "axios";

export async function addUser(values) {
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', values);
    return data
}

export async function getUsers() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data
}


export async function updateUser(id, values) {
    const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, values);
    return data;
}

export async function deleteUser(id, values) {
    const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, values);
    return data;
}