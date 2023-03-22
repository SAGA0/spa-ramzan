import { configureStore, createReducer } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { TypedUseSelectorHook } from 'react-redux/es/types'

const initSTate = {
	name: 'Ramza',
	age: 19,
}

const r = createReducer(initSTate, () => {})

export const store = configureStore({
	reducer: {
		user: r,
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
