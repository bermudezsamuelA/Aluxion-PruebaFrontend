import axios from 'axios'

const login = async ()=>{
    return await axios.get('https://openapi.emtmadrid.es/v?/mobilitylabs/user/login/', {
        headers: {
            email: 'sam93quimica14@gmail.com',
            password: 'Pi86a62pRQ4EtGD'
        }
       })
}

export {}