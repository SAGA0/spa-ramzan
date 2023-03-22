import { docReducer } from '@/entities/doc'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { TypedUseSelectorHook } from 'react-redux/es/types'

export const store = configureStore({
	reducer: {
		documents: docReducer,
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
