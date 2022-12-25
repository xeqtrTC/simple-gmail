import React, { useState } from 'react'
import Email from '../Emails/Email'
import EmailSend from '../Emails/EmailSend';
import Header from '../Header/Header'
// import LeftSide from '../LeftSide/LeftSide'

export default function Homescreen() {
  const [openEmail, setOpenEmail] = useState(false);
  console.log(openEmail)
  let isOpenEmailButton = null;

    if(openEmail) {
        isOpenEmailButton  = (
            <EmailSend openEmail={openEmail} setOpenEmail={setOpenEmail} />
        )
    }

    
    const combinedButtons = (
      <>
      {isOpenEmailButton}
      </>
  )

  

  return (
        <div className='w-full '>
            {/* <LeftSide  setOpenEmail={setOpenEmail} /> */}
            <Email setOpenEmail={setOpenEmail} openEmail={openEmail} />
            {combinedButtons}
        </div>
  )
}
