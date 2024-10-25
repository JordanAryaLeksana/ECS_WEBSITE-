
import Layout from '@/components/layout/Layout'
import React from 'react'
import Image from 'next/image'
import ComingSoon from './comingsoon'
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
<<<<<<< HEAD
            <ComingSoon></ComingSoon>
=======
                       
>>>>>>> 154902097a5b8f4c9014d3326ce053ea169456bc
            </div>
        </Layout>
    )
}

export default Project 