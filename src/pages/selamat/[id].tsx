import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import BarCode from 'react-barcode'
const Selamat = () => {
    const { query } = useRouter()
    const [id, setId] = React.useState('')
    const secretUrl = process.env.NEXT_PUBLIC_API_URL
    function Code({ decimal }: any) {
        decimal = Math.sinh(decimal)
        return (
            <div className=''>
                <BarCode height={40} lineColor='rgba(10,10,10,0.03)' value={decimal} displayValue={false} ></BarCode>
            </div>
        )
    }

        return (
            <div>
                <div>

                    <div className='bg-white p-20 flex flex-col justify-center items-center'>
                        <h1>Terima kasih sudah memecahkan game dari ECS. Pengumuman akan ditampilkan pada halaman ini mulai pukul 19.00 tanggal 8 Desember 2023.</h1>
                    </div>


                </div>

            </div>
        )
   
    

}

export default Selamat