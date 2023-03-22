import { DocModel } from '@/shared/api/docs'
import { Delete } from '@mui/icons-material'
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    IconButton,
} from '@mui/material'
import moment from 'moment'
import { FC } from 'react'
import { StyledTableCell, StyledTableRow } from './styles'
import { TableHeaderConfig } from './types'

interface Props {
    headerConfig?: TableHeaderConfig[]
    data?: DocModel[]
    onDelete?: (id: string) => void
}

const CustomTable: FC<Props> = ({ headerConfig, data, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headerConfig?.map((item) => (
                            <StyledTableCell key={item.key}>{item.title}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                                {moment(item.companySigDate).format('DD-MM-YYYY')}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.companySignatureName}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.documentName}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.documentStatus}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.documentType}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.employeeNumber}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {moment(item.employeeSigDate).format('DD-MM-YYYY')}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.employeeSignatureName}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {item.employeeSignatureName}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton onClick={() => onDelete(item.id)}><Delete /></IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable
