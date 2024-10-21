import DashboardLayout from '@/components/DashboardComponents/dashboardLayout'
import { useData } from '@/components/Provider/authProvider'
import Typography from '@/components/Typography/Typography'

import React, { useContext, useEffect } from 'react'

const Modul = () => {
  
  const {userData} = useData()
  const modul = userData?.modul?.replace(/'/g, '"') || ""
  const modulList = JSON.parse(modul || '[]');

  const modulData = [
    {
      title: "Dasar Pemrograman",
      modul: "Modul Dasar Pemrograman",
      image: "PemrogramanModul.png",
      file: "/modul/prog.pdf"
    },
    {
      title: "Machine Learning",
      modul: "Modul Machine Learning",
      image: "MLModul.png",
      file: "/modul/ml.pdf"
    },
    {
      title: "Microcontroller",
      modul: "Modul Microcontroller I",
      image: "MicroModul.png",
      file: "/modul/mikro 1.pdf"
    },
    // {
    //   title: "Microcontroller",
    //   modul: "Modul Microcontroller II",
    //   image: "MicroModul.png",
    //   file: "/modul/mikro 2.pdf"
    // }
  ]
  const filteredModulData = modulData.filter(modulItem => 
    modulList.includes(modulItem.title)
  );

  function ModulCard(props:any){
    const {title, image, file} = props
    return(
      <div className='w-full md:w-[300px] h-[300px] bg-[#1B1B1B] rounded-xl'>
            <a href={file} target='_blank'> 
              <div className='h-[130px] flex flex-col justify-between py-5 px-6 rounded-t-xl' style={{ backgroundImage: `url('/${image}')` }}>
                <div>
                  <Typography variant='Header' size='lg' className='text-AddsOn-neutral font-bold' >{title}</Typography>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >2024</Typography>
                </div>
                <div>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >TEAM ECS</Typography>
                </div>
              </div>
            </a> 
            <div className='h-[110px]'>
              
            </div> 
            <hr className='border-white border-1' />
            <div className='h-[60px]'>
              <div className='h-full flex flex-row justify-end items-center gap-6 px-6 '>
                <a href={file} target='_blank'><img src="/Document.svg" alt="" /></a>
                <a href={file} download><img src="/Download.svg" alt="" /></a>
              </div>
            </div>
          </div>
    )
  }
  return (
    <DashboardLayout>
  
      
        <div className='flex flex-col md:flex-wrap md:w-[80%] gap-8 w-full lg:flex-row md:ml-[20px] pt-14 h-full'>
          {filteredModulData.map((modulItem, index) => (
            <ModulCard 
              key={index} 
              title={modulItem.modul} 
              image={modulItem.image} 
              file={modulItem.file}
            />
          ))}

          
        </div>
 
    </DashboardLayout>
  )
}

export default Modul
