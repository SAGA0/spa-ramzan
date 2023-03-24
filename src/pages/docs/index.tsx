import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { createDoc, deleteDoc, getDocs, setUpdateDoc, updateDoc } from '@/entities/doc'
import { CustomCreateDocModal } from '@/features/create-document-modal'
import { CreateDocModel } from '@/shared/api/docs'
import CustomTable from '@/shared/ui/table'
import { Button, Container, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'



const Docs = () => {
    const dispatch = useAppDispatch()
    const { items, isLoading, updatingDoc } = useAppSelector((state) => state.documents)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        dispatch(getDocs())
    }, [])

    const handleDelete = (id: string) => {
        dispatch(deleteDoc(id))
    }

    const setUpdate = (id: string, data: CreateDocModel) => {
        dispatch(setUpdateDoc(data))
        handleOpenModal()
    }

    const handleCreateDoc = (data: CreateDocModel) => {
        dispatch(createDoc(data))
        handleCloseModal()
    }

    const handleUpdateDoc = (data: CreateDocModel) => {
        dispatch(updateDoc({ ...data, id: updatingDoc?.id as string }))
        handleCloseModal()
    }

    const handleOpenModal = () => setIsActive(true)
    const handleCloseModal = () => setIsActive(false)



    return (
        <Container component={'main'}>
            <Button onClick={handleOpenModal}>Create Doc</Button>
            {isLoading ? (
                <>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </>
            ) : (
                <>
                    <CustomTable data={items} onDelete={handleDelete} onChange={setUpdate} />
                    <CustomCreateDocModal open={isActive} onClose={handleCloseModal} onSubmit={handleCreateDoc} onUpdate={handleUpdateDoc} />
                </>

            )}
        </Container>
    )
}

export default Docs
