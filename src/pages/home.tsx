import { useAppSelector } from '@/app/store/store'
import { docsService } from '@/shared/api/docs'
import { Button } from '@mui/material'
import React from 'react'

const Home = () => {
    const getDocs = () => {
        docsService.getDocs().then(res => {
            console.log(res)
        })
    }

    return (
        <Button onClick={getDocs}>GetDocs</Button>
    )
}

export default Home
