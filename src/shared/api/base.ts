import axios from 'axios'
import interceptors from './interceptors'

export const apiInstance = axios.create({
	baseURL: 'https://test.v5.pryaniky.com',
	headers: {
		'Content-Type': 'application/json',
	},
})

interceptors(apiInstance)
