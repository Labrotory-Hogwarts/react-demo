import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider locale={ zhCN }>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
)
