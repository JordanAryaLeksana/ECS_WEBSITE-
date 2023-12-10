import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import BarCode from 'react-barcode'

const Selamat = () => {
    
    const { query } = useRouter()
    const [data, setData] = React.useState([])
    const [id, setId] = React.useState('')
    const secretUrl = process.env.NEXT_PUBLIC_API_URL5
    useEffect(()=>{
        axios.get(`/api/${secretUrl}`)
        .then(res => {
            setData(res.data.nrp)
        })
        .catch(err => {
    
        })
    },[])
    function Code({ decimal }: any) {
        decimal = Math.sinh(decimal).toString()
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
                        {
                            data.map((item: any) => (
                               <div key={item}>
                                <Code decimal={item} /></div>
                            ))
                        }
                    </div>


                </div>

            </div>
        )
   
    

}

export default Selamat
