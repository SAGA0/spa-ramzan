import { apiInstance } from './../base'
import { DocModel } from './models'

class DocsService {
	async getDocs() {
		const { data } = await apiInstance.get<DocModel[]>(
			'/ru/data/v3/testmethods/docs/userdocs/get',
		)

		return data
	}

	async deleteDoc(id: string) {
		await apiInstance.post(`/ru/data/v3/testmethods/docs/userdocs/delete/${id}`)
	}
}

export const docsService = new DocsService()
