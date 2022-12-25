import React, { useRef, useState } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { logoutUser } from '../../api/gmailApi';
import UseAuth from '../../Hooks/UseAuth';

export default function Header() {
    const [focus, setFocus] = useState(false);
    const { username, isauth } = UseAuth()
    const queryClient = useQueryClient();

    console.log(username, isauth);
    const logoutMutate = useMutation(logoutUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('whoAmI')
        }
    })

    const logoutFunction = (e) => {
        e.preventDefault();
        logoutMutate.mutate()
    }
  return (
    <div className='flex p-2 justify-between '>
        <div className='flex items-center px-4'>
            <div className='hover:bg-[#3c4043]/20 p-2 rounded-full 	 flex items-center cursor-pointer'>
                <ReorderIcon className='color-[#5f6368]' />
            </div>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' className='object-cover px-4 h-[3rem]' />
        </div>
        <div className='w-[75%] '>
            <div className={`flex absolute overflow-hidden flex-col rounded-xl w-[40%] min-w-[20rem] ${focus ? 'bg-[#fff] transition duration-300 ease-in-out shadow-md' : 'bg-[#eaf1fb]/80 transition duration-300 ease-in-out'} `} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
                <div>
                    <div className='flex  p-1 items-center justify-between w-[100%]'>
                    <div className='px-2  '>
                        <button className='py-2 px-2 hover:bg-[#3c4043]/20 rounded-full flex items-center'><SearchRoundedIcon /></button>
                    </div>
                    <div className='w-[100%]'>
                        <input type='text' className='bg-transparent border-none py-2 outline-none w-[100%]'/>

                    </div>
                    <div className='px-2 flex  '>
                        <button className='py-2 px-2 hover:bg-[#3c4043]/20 rounded-full flex items-center'><TuneRoundedIcon /></button>

                    </div>
                </div>
                {
                    focus && (
                        <div className='w-rounded  w-[100%] bg-[#fff] overflow-hidden h-20 min-w-[20rem] transition duration-150 ease-in-out shadow-md border-t-2'>
 
                    
                    </div>
                    )
                }
                </div>
                
                
            </div>
            
            
        </div>
        <div className='flex items-center px-2'>
        {/* <div className='hover:bg-[#3c4043]/20 p-2 rounded-full 	 flex items-center cursor-pointer'>
                <ReorderIcon className='color-[#5f6368]' />
            </div> */}
            <button className='px-2.5 hover:bg-[#3c4043]/20 py-2 rounded-full flex items-center cursor-pointer'><HelpOutlineRoundedIcon /></button>
            <button className='px-2.5 hover:bg-[#3c4043]/20  py-2 rounded-full flex items-center cursor-pointer'><SettingsOutlinedIcon /></button>
            <button className='px-2.5 hover:bg-[#3c4043]/20  py-2 rounded-full flex items-center cursor-pointer'><AppsOutlinedIcon /></button>
            <div className='px-2.5'>
            <img src={'https://static.wikia.nocookie.net/pediaofinterest/images/e/e6/POI_0405_Flashback1.png'} alt='photo' className='w-10 h-10 object-cover rounded-full ' />

            </div>
            {
                isauth ? (
                    <button onClick={logoutFunction}>Logout</button>
                ) : (
                    <p>acab</p>
                )
            }

        </div>
        

    </div>

  )
}
