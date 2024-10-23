import DashboardLayout from '@/components/DashboardComponents/dashboardLayout';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Typography from "@/components/Typography/Typography";
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase/init';
import { useData } from '@/components/Provider/authProvider';

const Sertifikat = () => {
  const [sertif, setSertif] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useData();
  const name = userData?.name || "";
  const nrp = userData?.username || "√";

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);  // Mulai loading
      const folderRef = ref(storage, 'sertifikat');
      const folderContents = await listAll(folderRef);
      const fileUrls = await Promise.all(folderContents.items.map(getDownloadURL));
      const filteredSertif = fileUrls.find(url => url.includes(nrp));
      
      setSertif(filteredSertif || null);
      setIsLoading(false); // Selesai loading
    };

    fetchFiles();
  }, [nrp]);

  return (
    <DashboardLayout>
      <div className='flex flex-col sm:ml-[20px] sm:mt-[45px]'>
        <Typography size='xl' variant='Paragraph' className='text-AddsOn-neutral text-2xl mb-6'>Sertifikat</Typography>
        
        {isLoading ? (
          <Typography variant='Paragraph' size='sm' className='text-primary-light-active font-normal'>
            Memuat sertifikat...
          </Typography>
        ) : sertif ? (
          <div className='flex flex-col sm:flex-row sm:items-center w-full sm:max-w-[912px] h-[70px] sm:h-[94px] rounded-[24px] border-b border-[#000000] bg-[#1E1E1E] sm:p-5'>
            <div className='flex sm:items-center w-full sm:w-auto'>
              <Image src='/logo unduh.svg' alt='icon' width={29} height={29} className='ml-4 sm:mr-8 sm:w-[44px] sm:h-[44px] mt-1' />
              <div className='flex flex-col ml-4 sm:ml-8'>
                <Typography variant='Paragraph' size='xs' className='font-semibold text-AddsOn-neutral whitespace-nowrap sm:text-lg sm:leading-[27px] mt-[2px]'>
                  {name}
                </Typography>
                <Typography variant='Paragraph' size='xs' className='text-AddsOn-neutral sm:font-light font-normal sm:text-sm sm:leading-[21px] leading-[24px]'>
                  Sertifikat
                </Typography>
              </div>
            </div>
            <div className='sm:ml-auto sm:mt-0 sm:mr-10 mx-[60px]'>
              <a href={sertif} target='_blank' download>
                <Typography variant='Paragraph' size='xs' className='text-primary-light-active underline sm:hidden'>
                  Download
                </Typography>
                <Image src='/download icon.svg' alt='icon' width={24} height={24} className='hidden sm:block' />
              </a>
            </div>
          </div>
        ) : (
          <Typography variant='Paragraph' size='sm' className='text-primary-light-active font-normal'>
            Anda belum menyelesaikan course anda
          </Typography>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Sertifikat;
