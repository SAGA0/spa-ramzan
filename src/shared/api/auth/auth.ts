import { UserLogin } from '@/features/login'
import { apiInstance } from '../base'

class AuthService {
	async login(user: UserLogin) {
		const { data } = await apiInstance.post(
			'/ru/data/v3/testmethods/docs/login',
			user,
		)

		return data
	}
}

export const authService = new AuthService()
