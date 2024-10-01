import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const Dashboard = () => {
const router = useRouter()
 useEffect(()=>{
router.push('/epta/dashboard/modul')
 }, [])
}

export default Dashboard