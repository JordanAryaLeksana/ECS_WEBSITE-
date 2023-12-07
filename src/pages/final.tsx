import React from 'react';
import { Button, Input, Typography } from "@material-tailwind/react";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Head from 'next/head';
import { unstable_noStore as noStore } from 'next/cache';
import useResponsive from '@/components/useResponsive';
import axios from 'axios';

const TekaTeki = () => {
    noStore();
    const {isMobile, isDesktop}=useResponsive()
    const [inputUsername, setInputUsername] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');
    const [inputAnswer1, setInputAnswer1] = React.useState('');
    const [inputAnswer2, setInputAnswer2] = React.useState('');
    const { push } = useRouter();
    const secretUrl = process.env.NEXT_PUBLIC_API_URL3

   const handleLogin = () => {
        axios.post(`/api/${secretUrl}`, {
            useranswer7: inputAnswer1,
            useranswer8: inputAnswer2,
        })
            .then(res => {
                console.log(res)
                push(`/selamat/${res.data.secretKey}`)
            })
            .catch(err => {
                toast.error("Wrong answer")
            })

    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen ' >
            <div className={`flex flex-col gap-6 justify-center items-center text-left w-fit p-10 ${!isDesktop && 'text-[12px]'}`}>
                <div className={`flex flex-row justify-start items-center w-full gap-2 `}>
                    <h1>Saya sering makan </h1>
                    <input
                        type="text"
                        className='bg-transparent border-b-2 border-black focus:outline-none w-[140px]'
                        maxLength={15}
                        value={inputAnswer1}
                        onChange={(e) => setInputAnswer1(e.target.value)}
                    />
                    
                </div>
                <div className='flex flex-row gap-4 justify-start items-center w-full'>
                <h1>karena berasal dari </h1>
                    <div className='flex flex-row'>
                    
                        <input
                            type="text"
                            className='bg-transparent border-b-2 border-black focus:outline-none w-[80px]'
                            maxLength={7}
                            value={inputAnswer2}
                            onChange={(e) => setInputAnswer2(e.target.value)}
                        />
                    </div>
                    
                </div>
                <Button className='w-full' onClick={handleLogin}>
                    Oke
                </Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default TekaTeki;
