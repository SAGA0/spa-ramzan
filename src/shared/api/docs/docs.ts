import { apiInstance } from './../base'
import { CreateDocModel, DocModel } from './models'

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

	async updateDoc(id: string, data: DocModel) {
		await apiInstance.post(
			`/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
			data,
		)
	}

	async createDoc(doc: CreateDocModel) {
		const { data } = await apiInstance.post<DocModel>(
			`/ru/data/v3/testmethods/docs/userdocs/create`,
			doc,
		)

		return data
	}
}

export const docsService = new DocsService()
