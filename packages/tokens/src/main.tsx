import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

module.exports = {
  addons: ['@storybook/addon-essentials','@storybook/preset-create-react-app', '@storybook/addon-designs'],
}