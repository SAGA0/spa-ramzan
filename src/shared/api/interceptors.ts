import { AxiosRequestConfig, AxiosResponse } from 'axios'

function setToken(req: AxiosRequestConfig) {
	const isAuthUrl = req.url?.includes('register')

	if (!isAuthUrl) {
		const token = localStorage.getItem('token')

		if (token && req.headers) {
			req.headers['x-auth'] = token
		}
	}

	return req
}

function setTokenOnLogin(res: AxiosResponse) {
	const isLoginUrl = res.config.url?.includes('login')

	if (isLoginUrl) {
		const token = res.data.data.token

		localStorage.setItem('token', token)
	}

	return res
}

function getClearResponse(res: AxiosResponse) {
	return res.data
}

function onError(err: unknown) {
	return Promise.reject(err)
}

export default function (axios: any) {
	axios.interceptors.request.use(setToken)
	axios.interceptors.response.use(setTokenOnLogin)
	axios.interceptors.response.use(getClearResponse, onError)
}
