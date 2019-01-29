import React from 'react'
import { render } from 'react-dom'

import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import resetStyle from './styles/reset'
import globalStyle from './styles/global'

import { Provider as AlertProvider } from 'react-alert'

import App from './components/App'
import BasicAlert from './components/Alerts/basic'

import theme from './theme'

const Viewport =
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Global styles={resetStyle} />
      <Global styles={globalStyle} />
      <AlertProvider template={BasicAlert}>
        <App />
      </AlertProvider>
    </React.Fragment>
  </ThemeProvider>

// Render app
render(Viewport, document.getElementById('root'))
