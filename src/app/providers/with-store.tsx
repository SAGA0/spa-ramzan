import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const withStore = (component: () => ReactNode) => () => <Provider store={store}>{component()}</Provider>

export default withStore
