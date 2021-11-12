import { useState } from 'react'
import styles from './App.module.css'
import InputSection from './components/InputSection'
import Result from './components/Res'

export default function App() {
  // eslint-disable-next-line
  const [height, setHeight] = useState()
  // eslint-disable-next-line
  const [weight, setWeight] = useState()
  const [imc, setIMC] = useState(1)
  return (
    <div className={styles.main_conteiner}>
      <h1>IMC Calculator</h1>
      <div className={styles.input_section}>
        <InputSection setParentHeight={setHeight} setParentWeight={setWeight} IMC={setIMC} />
      </div>
      {
        isNaN(imc) === true || imc === 0 ? (
          <h2>Please, enter a valid number</h2>
        ) : (
          imc === 1 ? '' : (
            <Result userIMC={imc} />
          )
        )
      }
      
    </div>
  )
}