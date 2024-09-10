import DashboardLayout from '@/components/DashboardComponents/dashboardLayout'
import Typography from '@/components/Typography/Typography'
import React from 'react'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useState } from 'react'
const Tugas = () => {

  const [task, setTask] = useState(false)
  const TaskApi = [
    { name: "Judul Tugas dan Deskripsi", type: "Microcontroller", date: "Senin,9 September 2024" },
    { name: "Judul Tugas dan Deskripsi", type: "Microcontroller", date: "Senin,9 September 2024" },
    { name: "Judul Tugas dan Deskripsi", type: "Microcontroller", date: "Senin,9 September 2023" },
    { name: "Judul Tugas dan Deskripsi", type: "Microcontroller", date: "Senin,9 september 2024" },
  ]


  const handleTask = () => {

  }


  return (
    <DashboardLayout>
      <div className='h-full w-full lg:mt-[45px] lg:ml-[20px] ' >
        <Typography size='xl' variant='Paragraph' className='text-AddsOn-neutral text-2xl mb-6'>Daftar Tugas</Typography>
        {task
          ?
          (TaskApi.map(({ name, type, date }, index) => (
            <div className='h-auto w-full rounded-3xl  border-b-[1px] border-transparent hover:border-accent-warning-500' key={index}>
              <div className='flex flex-row items-center gap-10 p-5 '>
                <div className='w-fit h-fit p-2 bg-AddsOn-neutral rounded-full items-center justify-center'>
                  <HiOutlineDocumentText size={20} />
                </div>
                <div className='flex flex-col w-full lg:justify-between lg:gap-0 gap-3 '>
                  <Typography variant='Paragraph' size='xs' className='lg:text-lg font-semibold text-AddsOn-neutral'>
                    {name}
                  </Typography>
                  <Typography variant='Paragraph' size='xs' className='font-light text-AddsOn-neutral lg:order-2'>
                    {type}
                  </Typography>
                  <Typography variant='Paragraph' size='xs' className='font-light text-AddsOn-neutral flex lg:justify-end  '>
                    {date}
                  </Typography>
                </div>
              </div>
            </div>
          )))
          :
          (
            <Typography variant='Paragraph' size='sm' className="text-primary-light-light ">Tidak Ada Daftar Tugas Yang Tersedia</Typography>
          )
        }
      </div>


    </DashboardLayout>
  )
}

export default Tugas