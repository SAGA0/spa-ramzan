import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { deleteDoc, getDocs } from '@/entities/doc'
import CustomTable from '@/shared/ui/table'
import { Button, Container, Skeleton } from '@mui/material'

const Docs = () => {
    const dispatch = useAppDispatch()
    const { items, isLoading } = useAppSelector((state) => state.documents)

    const handleGetDocs = () => {
        dispatch(getDocs())
    }

    const handleDelete = (id: string) => {
        dispatch(deleteDoc(id))
    }

    return (
        <Container component={'main'}>
            <Button onClick={handleGetDocs}>GetDocs</Button>
            {isLoading ? (
                <>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </>
            ) : (
                <CustomTable data={items} onDelete={handleDelete} />
            )}
        </Container>
    )
}

export default Docs
