import axios, { Axios} from 'axios';

const url='http://localhost:3006/'

export const getPizzadata = () =>{
    axios.get(url/'pizza')
    .then(response=> console.log('Data is..',response.data))
    .catch(error => console.log('Error is..',error))
    
}