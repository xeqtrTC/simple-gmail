import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../api/gmailApi';
import GetCookie from '../../Hooks/GetCookie';


export default function Register() {
    const [error, setError] = useState(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [passAconfirm, setPassAConfirm] = useState(false);
    console.log(passAconfirm)
    const [clickedInputs, setClickedInputs] = useState({
        usernameField: false,
        surnameField: false,
        emailField: false,
        passwordField: false,
        setConfirmPassword: false
    })
    const [valueInputs, setValueInputs] = useState({
        usernameField: '',
        surnameField: '',
        emailField: '',
        passwordField: '',
        setConfirmPassword: ''
    })
    useEffect(() => {
        if(valueInputs.passwordField.length > 0 && valueInputs.setConfirmPassword.length > 0)
        setPassAConfirm(valueInputs.passwordField === valueInputs.setConfirmPassword)
    }, [valueInputs.passwordField, valueInputs.setConfirmPassword, passAconfirm])

    const addUserMutation = useMutation(addUser, {
        onSuccess: () => {
            // invalidates the cache n refetch
            // queryClient.invalidateQueries('acab')
            navigate('/')
        },
        onError: (error) => {
            console.log(error.response.data[0])
            const errormsg = error.response.data[0]
            if(errormsg == 'user with this username already exists.') {
                setError('User with this username already exists')
            } else if (errormsg == 'user with this email already exists.') {
                setError('User with this email already exists')
            } else if (errormsg == 'Enter a valid email address.') {
                setError('Enter a valid email address')
            }
        }
    })

    const addUserFunction = (e) => {
        e.preventDefault();

        const { usernameField, surnameField, emailField, passwordField, setConfirmPassword} = valueInputs

        const username = usernameField
        const email = emailField
        const password = passwordField
        const ipaddress = '1.5.6.2'
        const test = passAconfirm && valueInputs.emailField && valueInputs.passwordField && valueInputs.usernameField && valueInputs.setConfirmPassword
        try {
            if(test) {
                addUserMutation.mutate({username, email, password, ipaddress})
            }
        } catch (error) {
            console.log(error);
        }
    }
    const userRef = useRef();
    const emailRef = useRef();
    const surnameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const setFocusOnUsernameField = (e) => {
        const name = e.target.name;
        const id = e.target.id
        setClickedInputs(inputs => ({...inputs, [name || id]: true}))
    }
    const changeValueOfInput = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setValueInputs(othervalue => ({...othervalue, [name]: value}))
    }
    const onBlurEmailField = () => {
        if(valueInputs.emailField.length > 0) {
            setClickedInputs(inputs => ({...inputs, emailField: true }))
        } else {
            setClickedInputs(inputs => ({...inputs, emailField: false }))
        }
    }
    const onBlurUsernameField = () => {
        if(valueInputs.usernameField.length  > 0) {
            setClickedInputs(inputs => ({...inputs, usernameField: true}))
        } else {
            setClickedInputs(inputs => ({...inputs, usernameField: false}))
        }
    }
    const onBlurPasswordField = () => {
        if(valueInputs.passwordField.length > 0) {
            setClickedInputs(inputs => ({...inputs, passwordField: true }))
        } else {
            setClickedInputs(inputs => ({...inputs, passwordField: false }))
        }
    }
    const onBlurConfirmPasswordField = () => {
        if(valueInputs.setConfirmPassword.length > 0) {
            setClickedInputs(inputs => ({...inputs, setConfirmPassword: true }))
        } else {
            setClickedInputs(inputs => ({...inputs, setConfirmPassword: false }))
        }
    }
    const onBlurSurnameField = () => {
        if(valueInputs.surnameField.length > 0) {
            setClickedInputs(inputs => ({...inputs, surnameField: true }))
        } else {
            setClickedInputs(inputs => ({...inputs, surnameField: false }))
        }
    }
    useEffect(() => {
        console.log('rreender')
    }, [])

    useEffect(() => {
        if(clickedInputs.usernameField) {
            userRef.current.focus()
        }
    }, [clickedInputs.usernameField, userRef])
    useEffect(() => {
        if(clickedInputs.emailField) {
            emailRef.current.focus();
        }
    }, [clickedInputs.emailField, emailRef])
    useEffect(() => {
        if(clickedInputs.surnameField) {
            surnameRef.current.focus();
        }
    }, [clickedInputs.surnameField, surnameRef])
    useEffect(() => {
        if(clickedInputs.passwordField) {
            passwordRef.current.focus();
        }
    }, [clickedInputs.passwordField, passwordRef])
    useEffect(() => {
        if(clickedInputs.setConfirmPassword) {
            confirmPasswordRef.current.focus();
        }
    }, [clickedInputs.setConfirmPassword,  confirmPasswordRef])

    let errorButton = null;
    if(error) {
        errorButton = (
            <div className='bg-[#DC143C] rounded text-white font-medium py-1 px-1.5'>
                <span>{error}</span>
            </div>
        )
    }

    const everyButtonTrue = [valueInputs.emailField, valueInputs.passwordField, valueInputs.usernameField, passAconfirm].every(Boolean)

    const combinedButtons = (
        <>
        {errorButton}
        </>
    )
  return (
    <div className='w-[60%] m-auto flex flex-col justify-center items-center h-screen'>
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='photo' className=' w-20 object-cover' />
        </div>
        <div>
            <span>Create your Google Account</span>
        </div>
        <div className='py-1'>
            
            <form onSubmit={addUserFunction}>
            <GetCookie />
            {combinedButtons}
            <div className='flex py-3'>
                <div className='flex px-5 items-center'>
                    <div className={`absolute ${clickedInputs.usernameField  ? 'mb-9 ease-out duration-100' : null } ease-in duration-100 text-xs bg-white ml-4 px-1 top flex`}>
                        <span className='' id='usernameField' onClick={setFocusOnUsernameField} onBlur={onBlurUsernameField}>Username</span>
                    </div>
                    <input type='text' name='usernameField' ref={userRef} className={`border-2 ${clickedInputs.usernameField ? 'border-[#1D75E8] ease-out duration-100' : null} outline-none z-100 rounded py-1.5 px-4 text-sm`} onFocus={setFocusOnUsernameField} onBlur={onBlurUsernameField } value={valueInputs.usernameField} onChange={changeValueOfInput}/>
                </div>

                <div className='flex px-5 items-center'>
                    <div className={`absolute ${clickedInputs.surnameField  ? 'mb-9 ease-out duration-100' : null } ease-in duration-100 text-xs bg-white ml-4 px-1 top flex`}>
                        <span className='' id='emailField' onClick={setFocusOnUsernameField} onBlur={onBlurSurnameField}>Email</span>
                    </div>
                    <input type='text' name='surnameField' ref={surnameRef} className={`border-2 ${clickedInputs.surnameField ? 'border-[#1D75E8] ease-out duration-100' : null} outline-none z-100 rounded py-1.5 px-4 text-sm`} onFocus={setFocusOnUsernameField} onBlur={onBlurSurnameField } value={valueInputs.surnameField} onChange={changeValueOfInput}/>
                </div>
                

                
                
            

            </div>
            <div className='py-3 flex items-center'>
                <div className={`absolute ${clickedInputs.emailField  ? 'mb-9 ease-out duration-100' : null } ease-in duration-100 text-xs bg-white ml-4 px-1 top flex`}>
                        <span className='' id='emailField' onClick={setFocusOnUsernameField} onBlur={onBlurEmailField}>Email</span>
                    </div>
                    <input type='email' name='emailField' ref={emailRef} className={`border-2 bg-white ${clickedInputs.emailField ? 'border-[#1D75E8] ease-out duration-100' : null} outline-none w-full z-100 rounded py-1.5 px-4 text-sm`} onFocus={setFocusOnUsernameField} onBlur={onBlurEmailField } value={valueInputs.emailField} onChange={changeValueOfInput}/>
            </div>

            <div className='flex'>
                <div className='flex px-5 items-center'>
                    <div className={`absolute ${clickedInputs.passwordField  ? 'mb-9 ease-out duration-100' : null } ease-in duration-100 text-xs bg-white ml-4 px-1 top flex`}>
                        <span className='' id='passwordField' onClick={setFocusOnUsernameField} onBlur={onBlurPasswordField}>Password</span>
                    </div>
                    <input type='password' name='passwordField' ref={passwordRef} className={`border-2 ${!passAconfirm && valueInputs.passwordField  && valueInputs.setConfirmPassword? 'border-[#f74d4d] animate-bounce' : passAconfirm ? 'border-[#1D75E8] ' : null} outline-none ease-out duration-100 z-100 rounded py-1.5 px-4 text-sm`} onFocus={setFocusOnUsernameField} onBlur={onBlurPasswordField } value={valueInputs.passwordField} onChange={changeValueOfInput}/>
                </div>
                <div className='flex px-5 items-center'>
                    <div className={`absolute ${clickedInputs.setConfirmPassword  ? `mb-9 ease-out ${clickedInputs.passwordField && clickedInputs.setConfirmPassword  && !passAconfirm ? 'animate-bounce' : null} duration-100` : null } ease-in duration-100 text-xs bg-white ml-4 px-1 top flex z-100`}>
                        <span className='' id='setConfirmPassword' onClick={setFocusOnUsernameField} onBlur={onBlurConfirmPasswordField} >Username</span>
                    </div>
                    <input type='password' name='setConfirmPassword' ref={confirmPasswordRef} className={`border-2 ${ !passAconfirm && valueInputs.setConfirmPassword && valueInputs.passwordField ? 'border-[#f74d4d]  animate-bounce' : passAconfirm ? 'border-[#1D75E8] ' : null} outline-none z-100 ease-out duration-100 rounded py-1.5 px-4 text-sm`} onFocus={setFocusOnUsernameField} onBlur={onBlurConfirmPasswordField } value={valueInputs.setConfirmPassword} onChange={changeValueOfInput}/>
                </div>
            </div>
            <div className='py-3'>
                <button className='bg-[#1A73E8] py-1 px-5 text-white ease-out duration-100 rounded disabled:cursor-not-allowed disabled:opacity-50' disabled={!everyButtonTrue}>Submit</button>
            </div>

            </form>
        </div>
    </div>
  )
}
