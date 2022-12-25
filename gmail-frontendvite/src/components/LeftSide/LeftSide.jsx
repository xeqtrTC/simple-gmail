import React, { useState } from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function LeftSide({ setEmailOpen }) {
    const [more, setMore] = useState(false);


    
    let moreButton = null;

    if(more) {
        moreButton = (
            <div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ChatOutlinedIcon /> <span className='px-3'>Caskanja</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ScheduleSendOutlinedIcon /> <span className='px-3'>Zakazno</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ForumOutlinedIcon /> <span className='px-3'>Sva posta</span></span>
                </div>
            </div>
            
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ReportGmailerrorredOutlinedIcon /> <span className='px-3'>Nepozeljno</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><DeleteOutlineOutlinedIcon /> <span className='px-3'>Otpad</span></span>
                </div>
            </div>
        </div>
        )
    }

    const combinedButtons = (
        <>
        {moreButton}
        </>
    )

  return (
    <div className='flex flex-col w-[20rem]'>
        <div className='py-2 px-5'>
            <button className='bg-[#c2e7ff] p-4 rounded-xl hover:shadow-lg transition duration-150 ease-in-out' onClick={setEmailOpen}><CreateOutlinedIcon /> New email</button>
        </div>
        <div className='py-2 flex flex-col'>
            <div className='bg-[#D3E3FD] py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ArticleOutlinedIcon /> <span className='px-3'>Primljeno</span></span>
                </div>
            </div>
            <div className='py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><StarBorderOutlinedIcon /> <span className='px-3'>Sa zvezdicom</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><AccessTimeOutlinedIcon /> <span className='px-3'>Odlozeno</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><ForwardOutlinedIcon /> <span className='px-3'>Poslano</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl	'>
                <div className='px-10 '>
                    <span><RestorePageOutlinedIcon /> <span className='px-3'>Nedovrseno</span></span>
                </div>
            </div>
            <div className=' py-1 rounded-r-2xl cursor-pointer' onClick={() => setMore(!more)}>
                <div className='px-10 '>
                    <button>{more ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon /> }<span className='px-3'>Vise</span></button>
                </div>
            </div>
            {
              
              combinedButtons
            }
            
            
        </div>
    </div>
  )
}
