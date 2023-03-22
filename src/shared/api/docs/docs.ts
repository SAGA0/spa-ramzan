import { apiInstance } from './../base'

class DocsService {
	async getDocs() {
		const { data } = await apiInstance.get(
			'/ru/data/v3/testmethods/docs/userdocs/get',
		)

		return data
	}
}

export const docsService = new DocsService()
