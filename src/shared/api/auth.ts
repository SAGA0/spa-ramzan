import axios from 'axios';

const HOST = 'https://test.v5.pryaniky.com'

export const postUser = (user: string, password: string) =>{
    axios.post(`${HOST}/ru/data/v3/testmethods/docs/login`,{
        username: {user},
        password: {password}
    }
    )
    .then((response: unknown) => {
            console.log(response)
    }).catch((err: unknown) => {
        if(typeof err === 'number'){
            throw new Error(`Code of Error: ${err}`)
        }else{
            throw new Error(`${err}`)
        }
    });
}
