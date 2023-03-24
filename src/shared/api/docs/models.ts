export interface DocModel {
	id: string
	companySigDate: Date | string
	companySignatureName: string
	documentName: string
	documentStatus: string
	documentType: string
	employeeNumber: string
	employeeSigDate: Date | string
	employeeSignatureName: string
}

export type CreateDocModel = Omit<DocModel, 'id'>
