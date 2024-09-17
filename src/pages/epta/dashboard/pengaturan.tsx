import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardComponents/dashboardLayout';
import Typography from '@/components/Typography/Typography';
import Input from '@/components/Input/Input';
import FormGroup from '@/components/Input/FormGroup';
import Button from '@/components/Buttons';
import { useData } from '@/components/Provider/authProvider';
import axios from 'axios';

const Pengaturan = () => {
  const { userData } = useData();
  const [namaLengkap, setNamaLengkap] = useState(userData?.name || '');
  const [email, setEmail] = useState(userData?.email || '');

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userData) {
      setNamaLengkap(userData?.name || '');
      setEmail(userData?.email || '');
    }
  }, [userData]);

  const handleSubmit = async () => {
    
    setError(null);

    if (namaLengkap === userData?.name && email === userData?.email) {
      alert('No changes detected');
      return;
    }

    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/auth/profile/${userData?.id}/`,
        { name: namaLengkap, email: email }
      );
      
      alert('Akun anda berhasil diperbarui');
      setTimeout(() => {
        window.location.href = "/epta/dashboard/modul"
      },1000)
    } catch (error) {
      setError('Failed to update profile');
      console.error('Error updating profile:', error);
    } 
  };

  return (
    <DashboardLayout>
       <Typography size='xl' variant='Paragraph' className='text-AddsOn-neutral text-2xl mb-6'>Pengaturan</Typography>
      <div className='flex flex-col gap-5'>
        <FormGroup onSubmit={handleSubmit} className='flex flex-col gap-5' initialValues={{
            NamaLengkap: userData?.name,
            NRP: userData?.username,
            Email: userData?.email,
          }}>
          <div className='flex sm:flex-row gap-4 flex-col text-AddsOn-neutral py-10 w-full border-y-[1px] border-white'>
            <h1 className='w-[200px]'>Akun</h1>
            <div className='flex flex-col gap-5 sm:w-[350px] w-full'>
              <Input
                label='Nama Lengkap'
                type='text'
                name='NamaLengkap'
                placeholder='Isi nama lengkap anda'
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
              <Input
                label='NRP'
                type='text'
                name='NRP'
                placeholder='cth. 50092XXXXX'
                maxLength={10}
                value={userData?.username || ''}
                disabled
              />
              <Input
                label='Email'
                type='text'
                name='Email'
                placeholder='cth. xyz@domain.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='flex flex-row-reverse w-full mt-10 items-center'>
            <Button
              type='submit'
              variant='default'
              className='w-full md:w-36'
              // disabled={isSubmitting}
            >
              Update
            </Button>
          
          </div>
        </FormGroup>
      </div>
    </DashboardLayout>
  );
};

export default Pengaturan;
