import React, { useState } from 'react'
import { addUser, loginUser } from '../../api/gmailApi'
import { useQuery, useQueryClient, useMutation } from 'react-query';
import GetCookie from '../../Hooks/GetCookie';
export default function Login() {
  const queryClient = useQueryClient();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');



  const addUserMutation = useMutation(loginUser, {
    onSuccess: (message) => {
        // invalidates the cache n refetch
        queryClient.invalidateQueries('whoAmI')
        console.log(message)
        console.log('a')
    },
    onError: (error) => {
        console.log(error.response.data[0])
    }

  
})
  const newFunction = (e) => {
    e.preventDefault();

    addUserMutation.mutate({password, username})
  }
return (
    <div className='flex  items-center justify-center h-screen bg-[#F5F5F5] w-full'>
        <div className='shadow-xl p-3 rounded-xl w-[20%] m-auto bg-white'>
          <form onSubmit={newFunction}>
            <GetCookie/>
            <div className='flex flex-col py-2'>
                <label className='py-1 text-sm'>Username or email address</label>
                <input type='text' className='py-1 px-2 rounded outline-none border-2 text-sm ' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-1 text-sm'>Password</label>
                <input type='password' className='py-1 px-2 rounded outline-none border-2 text-sm ' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className='bg-[#3E75CF] py-1 px-2 text-white rounded bold font-small w-full'>Sign in</button>
            </form>

        </div>
    </div>
  )
}
