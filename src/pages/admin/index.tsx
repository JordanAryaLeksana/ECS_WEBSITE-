import React from 'react';
import { Button, Input, Typography } from "@material-tailwind/react"; // Import your Input component
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Head from 'next/head';
const Admin = () => {
    const username = process.env.NEXT_PUBLIC_USER
    const password = process.env.NEXT_PUBLIC_PW

    const [inputUsername, setInputUsername] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(false);
    const secret_key = process.env.NEXT_PUBLIC_DR;
    const { push } = useRouter();

    const handleLogin = () => {
        if (inputUsername === username && inputPassword === password) {
            push(`/admin/${secret_key}`);
        }
        else {
            toast.error("Wrong username or password")
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen ' style={{backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat'}}>
        <Head><title>login - admin - ecs-laboratory</title></Head>
            <div className='flex flex-col  space-y-4 lg:w-1/2 sm:w-full text-left'>
                <Typography slot='' variant="h6" color="blue-gray" className="-mb-3">
                    Username
                </Typography>
                <Input
                    onChange={(e) => setInputUsername(e.target.value)}
                    value={inputUsername}
                    type="text"
                    size="lg"
                    placeholder="Enter your username"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }} crossOrigin={"anonymous"} />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                </Typography>
                <Input
                    crossOrigin={"anonymous"}
                    onChange={(e) => setInputPassword(e.target.value)}
                    value={inputPassword}
                    type="password"
                    size="lg"
                    placeholder="Enter your password"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />

                <Button className='w-full'
                    onClick={handleLogin}

                >
                    Login
                </Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Admin;
