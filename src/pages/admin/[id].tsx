import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase_config';
import Head from 'next/head';
import * as XLSX from 'xlsx'
import {saveAs} from 'file-saver';

const Admin = () => {
  const { query, push } = useRouter();
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
  try {
    if (query.id === 'tes') {
      console.log('tes');
    } else {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userData = querySnapshot.docs.map((doc) => {
        // Get all data from the document
        const fullData = doc.data();

        // Exclude the password field
        const { password, ...userDataWithoutPassword } = fullData;

        return userDataWithoutPassword;
      });

      setData(userData);
    }
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

    fetchData();
  }, [query.id, push]);
  const exportToExcel = () => {
    
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'users');
    //Buffer
    let buf = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
    //Binary string
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
    //Download
    XLSX.writeFile(workBook, 'users.xlsx');
  }
  return (
    
     <div className='w-full min-h-screen' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
     <div >
    <Head><title>admin - ecs-laboratory</title></Head>
      {query.id !== 'ywgddtewfdf2e3edfett33et36e' ? (
        <div className="text-center py-8">Tidak ada apa-apa di sini</div>
      ) : (
        <div className="mx-auto max-w-screen-lg p-8">
          <h1 className='text-center font-bold text-2xl pt-10 mb-8'>
            Data Pendaftar Oprec ECS 2024
          </h1>
          {data && (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Nama</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">NRP</th>
                    <th className="px-4 py-2">WA</th>
                    <th className="px-4 py-2">CV</th>
                    <th className="px-4 py-2">MotLet</th>
                    <th className="px-4 py-2">Pas Foto</th>
                    <th className="px-4 py-2">KTM</th>
                    <th className="px-4 py-2">SK</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any, index: any) => (
                    <tr key={index} >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.email}</td>
                      <td className="px-4 py-2">{item.nrp}</td>
                      <td className="px-4 py-2">{item.wa}</td>
                      <td className="px-4 py-2 text-center">
                        <a className='p-3 py-1 bg-yellow-500 rounded-2xl' href={item.cv} target="_blank" rel="noopener noreferrer">
                          Open
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <a className='p-3 py-1 bg-yellow-500 rounded-2xl' href={item.motlet} target="_blank" rel="noopener noreferrer">
                          Open
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <a className='p-3 py-1 bg-yellow-500 rounded-2xl' href={item.foto} target="_blank" rel="noopener noreferrer">
                          Open
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <a className='p-3 py-1 bg-yellow-500 rounded-2xl' href={item.ktm} target="_blank" rel="noopener noreferrer">
                          Open
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <a className='p-3 py-1 bg-yellow-500 rounded-2xl' href={item.sk} target="_blank" rel="noopener noreferrer">
                          Open
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          )}
        </div>
        
      )}
      
    </div>
     <button onClick={exportToExcel} className='flex items-center justify-center mt-20 w-full p-3 py-2 border-2 bg-black/75 text-white  rounded-xl'>Download XLSX</button></div>
  );
};

export default Admin;
