import { FC } from 'react'
import { Grid, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const Input: FC<TextFieldProps & { half?: boolean, handleShowPassword?: () => void }> = ({ name, label, type = 'text', handleShowPassword, half, ...rest }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                {...rest}
                required
                fullWidth
                name={name}
                label={label}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}

                        </IconButton>
                    </InputAdornment>
                } : undefined}
            />
        </Grid>
    )
}

