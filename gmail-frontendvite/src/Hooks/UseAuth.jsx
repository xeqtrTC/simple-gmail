import React from 'react'
import { useQuery } from 'react-query'
import { whoAmI } from '../api/gmailApi';

export default function UseAuth() {

    const { data, isLoading, isSuccess } = useQuery('whoAmI', whoAmI);
    console.log(data)
    if(isLoading) {
        return true
    }

    if(isSuccess) {
        const { username, email, isauth } = data;

        if(!isauth) {
            return { isauth }
        }
    

        return { username, isauth }
    }
    


  
}
