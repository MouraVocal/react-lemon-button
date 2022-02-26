import React from 'react'
import { render } from 'react-dom'
import { LemonButton } from '../src'

const App = () => (
  <>
    <LemonButton color='secondary' onClick={() => alert('Alerta do Lemon Button')}>Clique em mim</LemonButton>
  </>
)

render(<App />, document.getElementById('root'))
