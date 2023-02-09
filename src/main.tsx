import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/styles.scss'


import { AxiosInterceptors } from './interceptors'

AxiosInterceptors()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
