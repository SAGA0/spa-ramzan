import { Avatar, Container, Paper } from '@mui/material'
import { LoginForm, UserLogin } from '@/features/login'
import styles from './index.module.scss'
import { LockOutlined } from '@mui/icons-material'
import { authService } from '@/shared/api/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = (data: UserLogin) => {
        authService.login(data).then(() => {
            navigate('/docs')
        })
    }

    return (
        <Container component={'main'} maxWidth="xs" className={styles.login}>
            <Paper elevation={2} className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlined />
                </Avatar>

                <LoginForm handleSubmit={handleLogin} />
            </Paper>
        </Container>
    )
}

export default Login
