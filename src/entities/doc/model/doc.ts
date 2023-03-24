import { toast } from 'react-toastify'
import { CreateDocModel } from './../../../shared/api/docs/models'
import { DocModel, docsService } from '@/shared/api/docs'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialDocState {
	items: DocModel[]
	isLoading: boolean
	updatingDoc: DocModel | null
}

export const getDocs = createAsyncThunk('documents/get', async () => {
	try {
		const data = await docsService.getDocs()

		return data
	} catch (error: unknown) {
		toast.error('Something went wrong!')
		console.error(error)
	}
})

export const deleteDoc = createAsyncThunk(
	'documents/delete',
	async (id: string) => {
		try {
			await docsService.deleteDoc(id)
			toast.success('Document was deleated!')
			return id
		} catch (error: unknown) {
			toast.error('Something went wrong!')
			console.error(error)
		}
	},
)

export const updateDoc = createAsyncThunk(
	'documents/update',
	async (data: DocModel) => {
		try {
			await docsService.updateDoc(data.id, data)
			toast.success('Document was updated!')
			return data
		} catch (error: unknown) {
			toast.error('Something went wrong!')
			console.error(error)
		}
	},
)

export const createDoc = createAsyncThunk(
	'documents/create',
	async (doc: CreateDocModel) => {
		try {
			const data = await docsService.createDoc(doc)
			toast.success('Document was created!')
			return data
		} catch (error: unknown) {
			toast.error('Something went wrong!')
			console.error(error)
		}
	},
)

const initialState: InitialDocState = {
	items: [],
	isLoading: false,
	updatingDoc: null,
}

const docModel = createSlice({
	name: 'document',
	initialState,
	reducers: {
		setUpdateDoc(state, action) {
			state.updatingDoc = action.payload
		},
		clearUpdateDoc(state) {
			state.updatingDoc = null
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(getDocs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getDocs.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = action?.payload || []
			})
			.addCase(getDocs.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(deleteDoc.fulfilled, (state, action) => {
				state.items = state.items.filter((item) => item.id !== action.payload)
			})
			.addCase(createDoc.fulfilled, (state, action) => {
				if (action.payload) {
					state.items = [...state.items, { ...action?.payload }]
				}
			})
			.addCase(updateDoc.fulfilled, (state, action) => {
				state.items = state.items.map((item) =>
					item.id === action.payload?.id ? action.payload : item,
				)
				state.updatingDoc = null
			}),
})

export const docReducer = docModel.reducer
export const { setUpdateDoc, clearUpdateDoc } = docModel.actions
