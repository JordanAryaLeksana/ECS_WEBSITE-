import FormGroup from '@/components/Input/FormGroup'
import Input from '@/components/Input/Input'
import Typography from '@/components/Typography/Typography'
import Button from '@/components/Buttons'
import InputPassword from '@/components/Input/inputPassword'
import React, { useEffect, useState } from 'react'
import Card from './cardRegister'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useData } from '@/components/Provider/authProvider'
import Link from 'next/link'
const Register = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const { userData } = useData()
  const router = useRouter()
 useEffect(() => {
    if (userData != null && userData?.payment_status === true) {
    
        router.push('/epta/dashboard/modul')
      }
    else if(userData != null && userData?.payment_status === false){
        router.push('/epta/confirmation')
      }
    

  }, [userData])
  const courses = [
    {
      title: 'Dasar Pemrograman',
      price: 'Rp20.000',
      icon: '/PemrogramanIcon.svg',
    },
    {
      title: 'Machine Learning',
      price: 'Rp25.000',
      icon: '/MLIcon.svg',
    },
    {
      title: 'Microcontroller',
      price: 'Rp40.000',
      icon: '/MicroIcon.svg',
    },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(title)
        ? prevSelectedCourses.filter((course) => course !== title)
        : [...prevSelectedCourses, title]
    );
  };
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [NRP, setNRP] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = () => {
    if (namaLengkap == '' || email == '' || password == '' || passwordConfirm == '') {
      alert('Data tidak boleh ada yang kosong!');
      return;
    }
    if (NRP.length != 10) {
      alert('Masukkan NRP dengan benar!');
      return;
    }

    if (password !== passwordConfirm) {
      alert('Password tidak sama');
      return;
    }
    if (selectedCourses.length === 0) {
      alert('Pilih minimal 1 modul');
      return;
    }
    let dataUser = {
      name: namaLengkap,
      username: NRP,
      email: email,
      password: password,
      modul: selectedCourses
    }
    axios.post("http://127.0.0.1:8000/api/auth/register/", dataUser)
      .then((response) => {
        console.log(response.data);
        Cookies.set("data", JSON.stringify(response.data), { expires: 14 });
        router.push('/epta/payment');
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.error);
      });
  }
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row' style={{ backgroundImage: "url('/bgRegist.png')" }}>
      <div className='w-full md:w-[20%]'></div>
      <div className='w-full md:w-[80%] bg-[#1E1E1E]'>
        <div className='py-10 px-4 md:py-20 md:px-16'>
          <Typography variant="Header" size="3xl" className="text-primary font-bold text-white pb-2">
            Registrasi EPTA 2024
          </Typography>
          <Typography variant="Paragraph" size="base" className='text-[#83817A]'>
            Sudah punya akun? <span className='text-white'><Link href="/epta/login">Login</Link></span>
          </Typography>

          <div className='flex flex-col pt-10 md:pt-20'>
            <div>
              <FormGroup
                initialValues={{
                  NamaLengkap: '',
                  NRP: '',
                  Email: '',
                  Password: '',
                }}
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 md:gap-6'
              >
                <div className='flex flex-col md:flex-row gap-4 md:gap-20'>

                  <div className='w-full md:w-[40%]'>

                    <Input
                      label='Nama Lengkap'
                      type='text'
                      name='NamaLengkap'
                      placeholder='Isi nama lengkap anda'
                      onChange={(e) => setNamaLengkap(e.target.value)}
                    />
                    <Input
                      label='NRP'
                      type='text'
                      name='NRP'
                      placeholder='cth. 50092XXXXX'
                      maxLength={10}
                      onChange={(e) => setNRP(e.target.value)}
                    />
                    <Input
                      label='Email'
                      type='text'
                      name='Email'
                      placeholder='cth. xyz@domain.com'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputPassword
                      label='Password'
                      required
                      name='Password'
                      placeholder='Masukkan kata sandi lebih dari 8 kata'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='w-full md:w-[40%]'>
                    <Typography variant="Header" size="xs" className="text-primary font-bold text-white pb-2">
                      Pilih course yang ingin ditempuh:
                    </Typography>

                    <div className="flex flex-wrap gap-4">
                      {courses.map((course) => (
                        <Card
                          key={course.title}
                          title={course.title}
                          price={course.price}
                          icon={course.icon}
                          selected={selectedCourses.includes(course.title)}
                          onClick={() => handleCardClick(course.title)}
                        />
                      ))}
                    </div>

                    <InputPassword
                      label='Konfirmasi Password'
                      required
                      name='ConfirmPassword'
                      placeholder='Masukkan kata sandi lebih dari 8 kata'
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  type='submit'
                  variant='default'
                  className='w-full md:w-36 mt-10'
                >
                  Registrasi
                </Button>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
