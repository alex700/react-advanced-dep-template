import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PocketCounter } from './counter'
import './style.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode><PocketCounter /></StrictMode>,
)
