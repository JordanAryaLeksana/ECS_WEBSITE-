import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase_config';

const Success = () => {
    const {query, push} = useRouter();
    const [user, setUser] = React.useState<any>(null);
    function decimalToBinary(decimal:any) {
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
    useEffect(() => {
      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          console.log(user)
        } else {
          push('/')
        }
      });
    
      return () => unsubscribeAuth();
    }, [query]);
  return (
    <div>
    <div>

      {
        user && <div>
          <h1>Terima kasih sudah mendaftar</h1>
      <h1>{decimalToBinary(query.id)}</h1>
        </div>
      }
      </div>
      </div>
  )
}

export default Success