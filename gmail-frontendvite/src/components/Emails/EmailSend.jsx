import React, { useEffect, useRef, useState} from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { addGmail } from '../../api/gmailApi';

export default function EmailSend({ openEmail, setEmailOpen}) {
    const [valuesGmail, setValuesGmail] = useState({
        receiver: '',
        title: '',
        textField: '',
    })
    const sendEmailFunction = useMutation(addGmail)
    const [focus, setFocus] = useState(false);
    const [minimize, setMinimaze] = useState(true)
    const userRef = useRef();

    const sendEmailToBack = async (e) => {
        e.preventDefault();
        const to = valuesGmail.receiver
        const subject = valuesGmail.title
        const message = valuesGmail.textField
        if(to && subject && message) {
            
            sendEmailFunction.mutate({to, subject, message})

            setValuesGmail({
                receiver: '',
                title: '',
                textField: ''
            })

        }
    }

    const updateValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValuesGmail(values => ({...values, [name]: value}))
    }

    const onClickMinimizeEmail = () => {
       setMinimaze(!minimize); 
    }
    console.log(valuesGmail);





    const onFocusEnableFocus = () => {
        setFocus(true);
    }
    const onBlurDisableFocus = () => {
        setFocus(false);
    }

    let focusButton = null;

    if(focus)  {
        focusButton = (
            <div className='flex'>
                <button className='px-2'>Kome</button>
                <input type='text' name='receiver'  className='py-1 outline-none w-full' ref={userRef} onChange={updateValues}/>
            </div>
        )
    } else {
        focusButton = (
            <div className='cursor-text py-1'  onClick={() => setFocus(true)} onBlur={onBlurDisableFocus}>
                <span className='text-[#B3BCBC]'>{valuesGmail.receiver.length > 0 ? valuesGmail.receiver : 'Primaoc'}</span>
            </div>
        )
    }

    const combinedFirstButtons = (
        <>
        {focusButton}
        </>
    )

    let minimizeButton = null;

    if(minimize) {
        minimizeButton = (
            <div className=' min-h-[60%] max-h-[80%]  '>
                <form onSubmit={sendEmailToBack}>
            
                <div className='bg-white 		'>
                <div className='py-1 px-4 '>
                    <div className='border-b-[1px] py-1' onFocus={onFocusEnableFocus} onBlur={onBlurDisableFocus}>

                        {
                            combinedFirstButtons
                        } 

                    </div>
                <div className='border-b-[1px] py-1'>
                    <input type='text' placeholder='Title' name='title' value={valuesGmail.title} onChange={updateValues} className='py-1 outline-none w-full placeholder:text-[#B3BCBC]'/>
                </div>
            </div>
                <div className='px-4 py-2'>
                    <textarea value={valuesGmail.textField}   onChange={updateValues} name='textField' className='min-h-[20rem] max-h-[30rem] outline-none  overflow-hidden overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-medium resize-none w-full' />
            </div>
        </div>
            <div className='px-3 py-5  z-100 bg-[#fff]'>
                <div className=' py-2 bottom-0 top-0'>
                    <button className='bg-[#1b61d1] py-1.5 px-5 text-[#fff]  rounded-2xl'>Send email</button>
                </div>
            </div>
            </form>
        </div>
        )
    }

    const combinedSecondButtons = (
        <>
        {minimizeButton}
        </>
    )



    useEffect(() => {
        if(userRef) {
            userRef?.current?.focus();
        }
    }, [focus, userRef])


    return (
    <div className='absolute bottom-0 z-10 flex flex-col justify-evenly right-14  shadow-2xl bg-white w-[30%]  rounded-t-xl'>
        <div className='flex justify-between bg-[#F2F6FC] px-5 py-1.5 cursor-pointer rounded-t-xl shadow-2xl ' onClick={onClickMinimizeEmail} >
                <div className='w-[80%]' >
                    <span className='text-sm'>Nova poruka</span>
                </div>
                <div className='flex items-center'>
                    <button className='flex items-center  hover:bg-[#3c4043]/10 transition  ease-in-out delay-75' onClick={onClickMinimizeEmail}><MinimizeIcon className='p-1 '/></button>
                    <button className='flex items-center  hover:bg-[#3c4043]/10 transition  ease-in-out delay-75' onClick={setEmailOpen}><CloseIcon className='p-1'  /></button>

                </div>
            </div>
            {
               combinedSecondButtons
            }
    </div>
    
  )
}
