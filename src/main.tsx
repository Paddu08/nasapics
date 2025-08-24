import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Apod } from './App.tsx'
import { store } from './store.tsx'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <Apod />
    </Provider>
  </StrictMode >,
)
