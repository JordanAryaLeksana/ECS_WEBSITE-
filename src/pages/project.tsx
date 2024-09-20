
import Layout from '@/components/layout/Layout'
import React from 'react'
import Image from 'next/image'
const Project = () => {
    return (
        <Layout>
            <Image
                src={`/Background-Default.png`}
                alt="background"
                fill
                objectFit="cover"
                className="fixed inset-0 block"
            />
            <div className='h-screen w-screen bg-primary-normal-normal'>
                       
            </div>
        </Layout>
    )
}

export default Project 