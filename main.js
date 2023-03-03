import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p>Hello word</p>
    <button>Envíar</button>
  </div>
`

setupCounter(document.querySelector('#counter'))
