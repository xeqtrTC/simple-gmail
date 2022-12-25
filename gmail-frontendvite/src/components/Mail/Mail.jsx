import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getEmailById, getEmails, viewInfo } from '../../api/gmailApi';
import { useParams } from 'react-router-dom';
export default function Mail() {
    const { id } = useParams()
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error, isSuccess } = useQuery(['emailbyid', id], () => getEmailById(id))
    console.log(data)

    let content;
    if(isLoading) {
        content = (
            <div className=' overflow-hidden py-2 px-12 scrollbar scroll-medium w-full'>
                <div className='p-3 flex justify-between   bg-[#fff]/50 z-100 w-full rounded-t-2xl shadow:md'>
                    <div className='flex items-center justify-center h-full'>
                        <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
    if(isSuccess) {
        const { id, message, subject, timestamp, to } = data 
        content =  (
            <div className=' overflow-hidden py-2 px-12 scrollbar scroll-medium w-full'>
                <div className='p-3 flex justify-between   bg-[#fff]/50 z-100 w-full rounded-t-2xl shadow:md'>
                    <div className='flex p-1 items-center'>
                        <div className=' flex'>
                            <button className='btn-hover'><ArrowBackIcon className='p-0.5'/></button>
                            <button className='btn-hover'><ArchiveOutlinedIcon className='p-0.5'/></button>
                            <button className='btn-hover'><ErrorOutlineOutlinedIcon className='p-0.5'/></button>
                        </div>
                    <div className=' px-2'>
                        <div className='w-[1px] bg-black h-[20px] flex items-center'>

                        </div>
                    </div>
                    
                    <button className='btn-hover'><DeleteOutlineOutlinedIcon className='p-0.5' /></button>
                    <button className='btn-hover'><EmailOutlinedIcon className='p-0.5'/></button>
                    <button className='btn-hover'><AccessTimeOutlinedIcon className='p-0.5'/></button>
                    <div className=' px-2'>
                        <div className='w-[1px] bg-black h-[20px] flex items-center'>

                        </div>
                    </div>
                    <button className='btn-hover'><TaskAltOutlinedIcon className='p-0.5'/></button>
                    <button className='btn-hover'><DriveFileMoveOutlinedIcon className='p-0.5'/></button>
                    <button className='btn-hover'><LabelOutlinedIcon className='p-0.5'/></button>
                    <button className='btn-hover'><MoreVertOutlinedIcon className='p-0.5'/></button>


                    </div>
                    <div className='flex'>
                        <button className='btn-hover'><KeyboardArrowLeftOutlinedIcon className='p-0.5'/></button>
                        <button className='flex items-center btn-hover'><KeyboardArrowRightOutlinedIcon className='p-0.5'/></button>
                    </div>
                </div>
            <div className=' w-full  overflow-hidden h-screen  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-medium'>
                <div className='bg-[#fff] flex flex-col rounded-b-2xl '>
                    <div className='flex justify-between pr-3 pl-20 pb-2 pt-2 items-center'>
                        <div className='flex items-center'>
                            <span>{subject}</span>
                            <button className='btn-hover'><BookmarkBorderOutlinedIcon className='p-0.5'/></button>
                        </div>
                        <div className='flex items-center'>
                            <button className='btn-hover'><LocalPrintshopOutlinedIcon className='p-0.5'/></button>
                            <button className='btn-hover'><OpenInNewOutlinedIcon className='p-0.5'/></button>

                        </div>

                    </div>
                    <div>
                        <div>
                            <div className='flex items-center'>
                                <div className='px-5 py-3'>
                                    <img src={'https://static.wikia.nocookie.net/pediaofinterest/images/e/e6/POI_0405_Flashback1.png'} alt='photo' className='w-10 h-10 object-cover rounded-full ' />
                                </div>
                                <div className='w-full flex justify-between'>
                                <div className='flex flex-col'>
                                    <div>
                                        <span className='font-bold'>xeqtr</span>
                                        <span className='text-xs px-1'>noreply@spotify.com</span>
                                        <span className='text-xs underline cursor-pointer'>Otkazi prijavu</span>
                                    </div>
                                    <div className='flex items-center  '>
                                        <span className='text-xs'>kome ja</span>
                                        <div className='relative'>
                                            <button><ArrowDropDownOutlinedIcon  className='p-1'/> </button>
                                            {/* <div className='absolute shadow-lg bg-white p-2 flex flex-col border-[1px] border-[#000000]/20 text-sm w-[30em] justify-center text-[#22222] '>
                                                <span className='text-center'>kome: acabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                                                <span className='text-center'>datum: acab</span>
                                                <span className='text-center'>naslov: acab</span>
                                                <span className='text-center'>poslato preko: acab</span>
                                                <span className='text-center'>potvrdjeno od:: acab</span>
                                                <span className='text-center'>bezbednost: acab</span>

                                        

                                            </div> */}
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='px-5 py-2 flex items-center'>
                                    <span className='text-xs color-[#00000]/40 px-2'>{timestamp}</span>
                                    <button className='btn-hover'><StarBorderOutlinedIcon className='p-1' /></button>
                                    <button className='btn-hover'><ReplyOutlinedIcon className='p-1' /></button>
                                    <button className='btn-hover'><MoreVertOutlinedIcon className='p-1'/></button>
                                </div>
                                </div>
                                
                            </div>
                                
                            <div className='w-[90%] m-auto'>
                                {message}
                            </div>

                            <div className='flex items-center w-[90%] m-auto py-5'>
                                <button className='flex items-center text-[#202124]/80 border border-[#202124]/80 rounded-full py-0.5 px-3 hover:bg-[#202124]/10'><TurnLeftIcon /> Odgovori</button>
                                <button className='flex items-center text-[#202124]/80 border border-[#202124]/80 rounded-full py-0.5 px-3 hover:bg-[#202124]/10 ml-2'><TurnRightIcon /> Prosledi</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
  return content
    // <div className=' overflow-hidden py-2 px-12 scrollbar scroll-medium w-full'>
    //     <div className='p-3 flex justify-between   bg-[#fff]/50 z-100 w-full rounded-t-2xl shadow:md'>
    //         <div className='flex p-1 items-center'>
    //             <div className=' flex'>
    //                 <button className='btn-hover'><ArrowBackIcon className='p-0.5'/></button>
    //                 <button className='btn-hover'><ArchiveOutlinedIcon className='p-0.5'/></button>
    //                 <button className='btn-hover'><ErrorOutlineOutlinedIcon className='p-0.5'/></button>
    //             </div>
    //             <div className=' px-2'>
    //                 <div className='w-[1px] bg-black h-[20px] flex items-center'>

    //                 </div>
    //             </div>
                
    //             <button className='btn-hover'><DeleteOutlineOutlinedIcon className='p-0.5' /></button>
    //             <button className='btn-hover'><EmailOutlinedIcon className='p-0.5'/></button>
    //             <button className='btn-hover'><AccessTimeOutlinedIcon className='p-0.5'/></button>
    //             <div className=' px-2'>
    //                 <div className='w-[1px] bg-black h-[20px] flex items-center'>

    //                 </div>
    //             </div>
    //             <button className='btn-hover'><TaskAltOutlinedIcon className='p-0.5'/></button>
    //             <button className='btn-hover'><DriveFileMoveOutlinedIcon className='p-0.5'/></button>
    //             <button className='btn-hover'><LabelOutlinedIcon className='p-0.5'/></button>
    //             <button className='btn-hover'><MoreVertOutlinedIcon className='p-0.5'/></button>


    //         </div>
    //         <div className='flex'>
    //             <button className='btn-hover'><KeyboardArrowLeftOutlinedIcon className='p-0.5'/></button>
    //             <button className='flex items-center btn-hover'><KeyboardArrowRightOutlinedIcon className='p-0.5'/></button>
    //         </div>
    //     </div>
    //     <div className=' w-full  overflow-hidden h-screen  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-medium'>
    //         <div className='bg-[#fff] flex flex-col rounded-b-2xl '>
    //             <div className='flex justify-between pr-3 pl-20 pb-2 pt-2 items-center'>
    //                 <div className='flex items-center'>
    //                     <span>Don't miss 3 free months premium</span>
    //                     <button className='btn-hover'><BookmarkBorderOutlinedIcon className='p-0.5'/></button>
    //                 </div>
    //                 <div className='flex items-center'>
    //                     <button className='btn-hover'><LocalPrintshopOutlinedIcon className='p-0.5'/></button>
    //                     <button className='btn-hover'><OpenInNewOutlinedIcon className='p-0.5'/></button>

    //                 </div>

    //             </div>
    //             <div>
    //                 <div>
    //                     <div className='flex items-center'>
    //                         <div className='px-5 py-3'>
    //                             <img src={'https://static.wikia.nocookie.net/pediaofinterest/images/e/e6/POI_0405_Flashback1.png'} alt='photo' className='w-10 h-10 object-cover rounded-full ' />
    //                         </div>
    //                         <div className='w-full flex justify-between'>
    //                         <div className='flex flex-col'>
    //                             <div>
    //                                 <span className='font-bold'>Spotify</span>
    //                                 <span className='text-xs px-1'>noreply@spotify.com</span>
    //                                 <span className='text-xs underline cursor-pointer'>Otkazi prijavu</span>
    //                             </div>
    //                             <div className='flex items-center  '>
    //                                 <span className='text-xs'>kome ja</span>
    //                                 <div className='relative'>
    //                                     <button><ArrowDropDownOutlinedIcon  className='p-1'/> </button>
    //                                     {/* <div className='absolute shadow-lg bg-white p-2 flex flex-col border-[1px] border-[#000000]/20 text-sm w-[30em] justify-center text-[#22222] '>
    //                                         <span className='text-center'>kome: acabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
    //                                         <span className='text-center'>datum: acab</span>
    //                                         <span className='text-center'>naslov: acab</span>
    //                                         <span className='text-center'>poslato preko: acab</span>
    //                                         <span className='text-center'>potvrdjeno od:: acab</span>
    //                                         <span className='text-center'>bezbednost: acab</span>

                                       

    //                                     </div> */}
    //                                 </div>
                                    
    //                             </div>
    //                         </div>
    //                         <div className='px-5 py-2 flex items-center'>
    //                             <span className='text-xs color-[#00000]/40 px-2'>12:49 (pre 11 sati)</span>
    //                             <button className='btn-hover'><StarBorderOutlinedIcon className='p-1' /></button>
    //                             <button className='btn-hover'><ReplyOutlinedIcon className='p-1' /></button>
    //                             <button className='btn-hover'><MoreVertOutlinedIcon className='p-1'/></button>
    //                         </div>
    //                         </div>
                            
    //                     </div>
                            
    //                     <div className='w-[90%] m-auto'>
    //                     asd shittttttt
    //                     </div>

    //                     <div className='flex items-center w-[90%] m-auto py-5'>
    //                         <button className='flex items-center text-[#202124]/80 border border-[#202124]/80 rounded-full py-0.5 px-3 hover:bg-[#202124]/10'><TurnLeftIcon /> Odgovori</button>
    //                         <button className='flex items-center text-[#202124]/80 border border-[#202124]/80 rounded-full py-0.5 px-3 hover:bg-[#202124]/10 ml-2'><TurnRightIcon /> Prosledi</button>
    //                     </div>

    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // </div>
}
