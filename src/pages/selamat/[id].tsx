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
                        <Code decimal={1}></Code>
<Code decimal={73}></Code>
<Code decimal={3}></Code>
<Code decimal={110}></Code>
<Code decimal={51}></Code>
<Code decimal={7}></Code>
<Code decimal={126}></Code>
<Code decimal={109}></Code>
<Code decimal={116}></Code>
            
                    
                    </div>


                </div>

            </div>
        )
   
    

}

export default Selamat
