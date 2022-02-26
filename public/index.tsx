import React from 'react'
import { render } from 'react-dom'
import { LemonButton } from '../src/Components/LemonButton'

const App = () => (
  <>
    <LemonButton icon='check' onClick={() => alert('Alerta do Lemon Button')}>Clique em mim</LemonButton>
  </>
)

render(<App />, document.getElementById('root'))
