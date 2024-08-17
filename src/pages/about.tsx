
import React from 'react'
import Button from '@/components/Buttons'
import Layout from '@/components/layout/Layout'
import Card from '@/components/Cards/Card'
import Image from 'next/image'
import { HiCode } from 'react-icons/hi'
const About = () => {
  return (
    <Layout>
      <div className='h-full min-h-screen w-screen bg-black  '>
      
          <Card Variant='GlassHover' Header='Embedded System' Paragraph='Embedded System merupakan devisi yang yang mendalami sistem kontrol yang dirancang spesifik untuk fungsi tertentu menggunakan perangakat keras dan perangkat lunak komputer
         yang diintegrasikan agar produk yang dihasilkan lebih mudah dan efisien.'  ImageSrc='/ComponentCard1.svg' ImageAlt='logo' Width={50} Height={50} className=''/>

          <Card  Icons={<HiCode className='' size={30}/>} Variant='PaymentCard' Header='Dasar Pemprograman' Paragraph='Rp.000,000,00' />

          <Card Variant='AssistantCard'  Header='Alif A.' Paragraph='Artificial Intelegent' AddImage ImageAlt='jordan' ImageSrc='/alif.png' Width={150} Height={150}/>
        <Button variant='default'>Button1</Button>
      </div>
    </Layout>
  )
}

export default About