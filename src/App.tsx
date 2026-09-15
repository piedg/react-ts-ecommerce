import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { HeroBanner } from './components/HeroBanner/HeroBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <HeroBanner title='BAKERY ECOMMERCE' subTitle='Lorem ipsum lorem ipsum' />
        </div>
      </section>
    </>
  )
}

export default App
