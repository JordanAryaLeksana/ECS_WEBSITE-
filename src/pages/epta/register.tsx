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
import * as Yup from 'yup'

const Register = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const { userData } = useData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Redirect based on payment status
  useEffect(() => {
    if (userData != null && userData?.payment_status === true) {
      router.push('/epta/dashboard/modul');
    } else if (userData != null && userData?.payment_status === false) {
      router.push('/epta/confirmation');
    }
  }, [userData, router]);

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

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    NamaLengkap: Yup.string().required('Nama Lengkap wajib diisi'),
    Email: Yup.string().email('Format email salah').required('Email wajib diisi'),
    NRP: Yup.string().length(10, 'NRP harus 10 karakter').required('NRP wajib diisi').matches(/^[0-9]+$/, 'NRP must be a number'),
    Password: Yup.string().required('Password wajib diisi').min(8, 'Password harus lebih dari 8 karakter'),
    ConfirmPassword: Yup.string()
      .required("Konfirmasi password wajib diisi")
      .oneOf([Yup.ref("Password")], "Konfirmasi password tidak cocok"),
  });

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
    setLoading(true);
    // Basic validation before sending the request
    if (namaLengkap === '' || email === '' || password === '' || passwordConfirm === '') {
      alert('Data tidak boleh kosong!');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Format email salah!');
      return;
    }

    if (NRP.length !== 10) {
      alert('NRP harus 10 karakter!');
      return;
    }

    if (password !== passwordConfirm) {
      alert('Password tidak sama!');
      return;
    }

    if (selectedCourses.length === 0) {
      alert('Pilih minimal 1 modul!');
      return;
    }

    const dataUser = {
      name: namaLengkap,
      username: NRP,
      email: email,
      password: password,
      modul: selectedCourses
    };

    // Sending the registration request
    axios.post("https://dzulf.pythonanywhere.com/api/auth/register/", dataUser)
      .then((response) => {
        setLoading(false);
        Cookies.set("data", JSON.stringify(response.data), { expires: 14 });
        router.push('/epta/payment');
      })
      .catch((error) => {
        setLoading(false);
        alert(error.response.data.error);
      });
  };

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row' style={{ backgroundImage: "url('/bgRegist.png')" }}>
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
            <FormGroup
              initialValues={{
                NamaLengkap: '',
                NRP: '',
                Email: '',
                Password: '',
                ConfirmPassword: '',
              }}
              validationSchema={validationSchema}
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
                    placeholder='Masukkan kata sandi lebih dari 8 karakter'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputPassword
                    label='Konfirmasi Password'
                    required
                    name='ConfirmPassword'
                    placeholder='Masukkan kata sandi lebih dari 8 karakter'
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                  
                </div>
                <div className='w-full md:w-[40%] '>
                  <Typography variant="Header" size="xs" className="text-primary font-bold text-white pb-2">
                    Pilih course yang ingin ditempuh (boleh pilih lebih dari satu):
                  </Typography>
                  <div className="flex flex-wrap gap-5">
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

                </div>
              </div>
              <Button
                    type='submit'
                    variant='default'
                    className='order-2 w-full md:w-36 sm:mt-10 mt-5'
                  >
                    {
                      loading ? "Loading..." : "Registrasi"
                    }
                  </Button >
            </FormGroup>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;