import { DocModel, docsService } from '@/shared/api/docs'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialDocState {
	items: DocModel[]
	isLoading: boolean
}

export const getDocs = createAsyncThunk('documents/get', async () => {
	try {
		const data = await docsService.getDocs()

		return data
	} catch (error: unknown) {
		console.error(error)
	}
})

export const deleteDoc = createAsyncThunk(
	'documents/delete',
	async (id: string) => {
		try {
			await docsService.deleteDoc(id)

			return id
		} catch (error: unknown) {
			console.error(error)
		}
	},
)

const initialState: InitialDocState = {
	items: [],
	isLoading: false,
}

const docModel = createSlice({
	name: 'document',
	initialState,
	reducers: {},
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
			}),
})

export const docReducer = docModel.reducer
