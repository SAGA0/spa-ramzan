import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Input } from '@/shared/ui'
import { Button, Grid, Typography } from '@mui/material'

export interface UserLogin {
    username: string
    password: string
}

const initialState: UserLogin = {
    username: '',
    password: '',
}

interface Props {
    handleSubmit?: (data: UserLogin) => void
}

export const LoginForm: FC<Props> = ({ handleSubmit }) => {
    const [data, setData] = useState<UserLogin>(initialState)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassword = () => setShowPassword((prev) => !prev)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault()

        handleSubmit?.(data)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <Typography variant="h5" textAlign="center" marginBottom={3}>
                Sign In
            </Typography>

            <Grid container gap={2}>
                <Input label="Email" name="username" autoFocus onChange={handleChange} />

                <Input
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    handleShowPassword={handleShowPassword}
                />

                <Button fullWidth type="submit" variant="contained" color="primary">
                    Sign In
                </Button>
            </Grid>
        </form>
    )
}
