import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase/firebase_config';
import { collection, doc, getDoc, getDocs, where, query as Query, onSnapshot } from 'firebase/firestore';
import useResponsive from '@/components/useResponsive';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
const Success = () => {
  const {isDesktop} = useResponsive()
  const { query, push } = useRouter();
  const [user, setUser] = React.useState<any>(null);
  function decimalToBinary(decimal: any) {
    if (decimal === 0) {
      return '0';
    }

    let binary = '';
    while (decimal > 0) {
      // Ambil sisa bagi dari pembagian oleh 2
      const remainder = decimal % 2;
      // Tambahkan sisa bagi ke awal string biner
      binary = remainder + binary;
      // Bagi bilangan desimal dengan 2 untuk iterasi berikutnya
      decimal = Math.floor(decimal / 2);
    }

    return binary;
  }
  const id = String(query.id)
  const [foto, setFoto] = useState("")
  useEffect(() => {
    const fetchData = () => {
      if (id) {
        const q:any = Query(collection(db, 'users'), where('nrp', '==', id));
        const unsubscribe = onSnapshot(q, (querySnapshot:any) => {
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            const userFoto = userData.foto;
            setUser(userData)
  
          } else {
            console.log("User not found");
          }
        });

        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }
    };

    fetchData();
  }, [id]);
  return (
    user &&
    <div className='flex w-full h-screen justify-center items-center p-10' style={{backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat'}}>
    
        
          {
            isDesktop?
            <div className='text-center flex flex-col justify-center gap-4 items-center '>
              <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:10}} className='w-[250px] rounded-3xl border-2' src={user.foto} alt="" />
            <h1 className='text-xl'>Terima kasih sudah mendaftar</h1>
            <TypeAnimation className="pb-20"
            repeat={Infinity}
            speed={50}
            style={{ whiteSpace: "pre-line", height: "80px", display: "block", fontWeight:"bold", fontSize:"20px"}} sequence={[
              `${decimalToBinary(query.id)}`,
              3000,
              `${user.name}`,
              3000


            ]
            }/>
        </div>:
           <div className='text-center flex flex-col justify-center gap-4 items-center '>
              <img className='w-[150px] rounded-3xl border-2' src={user.foto} alt="" />
            <h1>Terima kasih sudah mendaftar</h1>
            <TypeAnimation className="pb-20 break-all"
            repeat={Infinity}
            speed={50}
            style={{ whiteSpace: "pre-line", height: "80px", display: "block", fontWeight:"bold", fontSize:"14px"}} sequence={[
              `${decimalToBinary(query.id)}`,
              3000,
              `${user.name}`,
              3000


            ]
            }/>
      </div>
          }
      
    </div>
  )
}

export default Success