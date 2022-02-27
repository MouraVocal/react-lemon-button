import React from 'react'
import { render } from 'react-dom'
import { LemonButton } from 'react-lemon-button'

const App = () => (
  <>
    <LemonButton disabled color='secondary' onClick={() => alert('Alerta do Lemon Button')}>Clique em mim</LemonButton>
  </>
)

render(<App />, document.getElementById('root'))
