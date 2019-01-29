import { css } from '@emotion/core'

export default theme => css`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }
  #root {
    display: flex;
  }
  html {
    font-size: ${theme.sizes.normal}px;
  }
`
