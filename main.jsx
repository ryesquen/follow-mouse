import React from 'react'
import ReactDom from 'react-dom/client'
import { App } from './src/components/App'
import './style.css'

const element = document.getElementById('app')
const root = ReactDom.createRoot(element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
