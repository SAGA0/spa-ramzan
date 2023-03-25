import { CreateDocModel, DocModel } from '@/shared/api/docs'
import { Input } from '@/shared/ui'
import { Button, Grid, Modal } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { clearUpdateDoc } from '@/entities/doc'
import dayjs, { Dayjs } from 'dayjs';


interface Props {
    open: boolean
    onSubmit?: (data: CreateDocModel) => void
    onClose?: () => void
    onUpdate?: (data: CreateDocModel) => void
}

const initialState: CreateDocModel = {
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: '',
}

const ModalContent: FC<Props> = ({ open, onSubmit, onClose, onUpdate }) => {
    const [data, setData] = useState<CreateDocModel>(initialState)
    const dispatch = useAppDispatch()
    const { updatingDoc } = useAppSelector((state) => state.documents)

    useEffect(() => {
        if (updatingDoc) {
            const { id, ...rest } = updatingDoc
            setData(rest)
        } else {
            setData(initialState)
        }
    }, [updatingDoc])

    useEffect(() => {
        return () => setData(initialState)
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))

    const handleCompanySigDate = (e: any) => {
        setData((prev) => ({
            ...prev,
            companySigDate: dayjs(e).format('YYYY-MM-DD'),
        }))
    }

    const handleEmployeeSigDate = (e: any) => {
        setData((prev) => ({
            ...prev,
            employeeSigDate: dayjs(e).format('YYYY-MM-DD'),
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (updatingDoc) {
            onUpdate?.(data)
        } else {
            onSubmit?.(data)
        }

        setData(initialState)
    }

    return (
        <Modal
            open={open}
            onClose={() => {
                onClose?.()
                dispatch(clearUpdateDoc())
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form className={styles['modal-form']} onSubmit={handleSubmit}>
                <Grid container gap={2}>
                    <Grid direction="row" container spacing={1}>
                        <Input
                            onChange={handleChange}
                            value={data.documentName}
                            name="documentName"
                            label="Document Name"
                            half
                        />
                        <Input
                            onChange={handleChange}
                            value={data.employeeSignatureName}
                            name="employeeSignatureName"
                            label="Employee Signature Name"
                            half
                        />
                    </Grid>
                    <Input
                        onChange={handleChange}
                        value={data.companySignatureName}
                        name="companySignatureName"
                        label="Company Signature Name"
                    />
                    <Grid direction="row" container spacing={1}>
                        <Input
                            onChange={handleChange}
                            value={data.documentStatus}
                            name="documentStatus"
                            label="Document Status"
                            half
                        />
                        <Input
                            onChange={handleChange}
                            value={data.documentType}
                            name="documentType"
                            label="Document Type"
                            half
                        />
                    </Grid>

                    <Input
                        onChange={handleChange}
                        value={data.employeeNumber}
                        name="employeeNumber"
                        label="Employee Number"
                    />
                    <Grid direction="row" container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Company Sig Date"
                                    value={dayjs(data?.companySigDate)}
                                    onChange={handleCompanySigDate}

                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Employee Sig Date"
                                    value={dayjs(data?.employeeSigDate)}
                                    onChange={handleEmployeeSigDate}


                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                </Grid>
            </form>
        </Modal>
    )
}

export const CustomCreateDocModal: FC<Props> = (props) => {
    return ReactDOM.createPortal(
        <ModalContent {...props} />,
        document.querySelector('.portalDiv') as HTMLDivElement,
    )
}
