import React from 'react';
import { Button, Input, Typography } from "@material-tailwind/react";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Head from 'next/head';
import { unstable_noStore as noStore } from 'next/cache';
import useResponsive from '@/components/useResponsive';

const TekaTeki = () => {
    noStore();
    const {isMobile, isDesktop}=useResponsive()
    const [inputUsername, setInputUsername] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');
    const [inputAnswer1, setInputAnswer1] = React.useState('');
    const [inputAnswer2, setInputAnswer2] = React.useState('');
    const [inputAnswer3, setInputAnswer3] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(false);
    const { push } = useRouter();
    const secretUrl = process.env.NEXT_PUBLIC_API_URL

    const handleLogin = () => {
        fetch(`/api/${secretUrl}`)
            .then(res => res.json())
            .then(data => {
                if (inputAnswer1.toLowerCase() != data.answer1) {
                    toast.error("Wrong answer 1")
                    return;
                }

                if (inputAnswer2.toLowerCase() != data.answer2) {
                    toast.error("Wrong answer 2")
                    return;
                }

                if (inputAnswer3.toLowerCase() != data.answer3) {
                    toast.error("Wrong answer 3")
                    return;
                }
                toast.success("Oke benar")
                push(`/selamat/${data.secretKey}`);
            })

    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen ' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
            <div className={`flex flex-col gap-6 justify-center items-center text-left w-fit p-10 ${!isDesktop && 'text-sm'}`}>
                <div className='flex flex-row gap-4 justify-start items-center w-full'>
                    <h1>Makanan favoritku adalah </h1>
                    <input
                        type="text"
                        className='bg-transparent border-b-2 border-black focus:outline-none w-[140px]'
                        maxLength={15}
                        value={inputAnswer1}
                        onChange={(e) => setInputAnswer1(e.target.value)}
                    />
                    <h1>karena </h1>
                </div>
                <div className='flex flex-row gap-4 justify-start items-center w-full'>
                    <div className='flex flex-row'>
                        <input
                            type="text"
                            className='bg-transparent border-b-2 border-black focus:outline-none w-[80px]'
                            maxLength={7}
                            value={inputAnswer2}
                            onChange={(e) => setInputAnswer2(e.target.value)}
                        />
                        <h1>nya</h1>
                    </div>
                    <input
                        type="text"
                        className='bg-transparent border-b-2 border-black focus:outline-none w-[80px]'
                        maxLength={10}
                        value={inputAnswer3}
                        onChange={(e) => setInputAnswer3(e.target.value)}
                    />
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
