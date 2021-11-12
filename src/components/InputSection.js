import { useState } from "react"

export default function InputSection({ setParentHeight, setParentWeight, IMC }) {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()

  function setData() {
    setParentHeight(height);
    setParentWeight(weight);
    IMC(weight / (height / 100) ** 2)
  }

  return (
    <>
      <span>Height (cm)</span>
      <input type='text' onChange={(e) => setHeight(e.target.value)} onKeyDown={
        (e) => { if (e.key === 'Enter') setData(); }
      } />
      <span>Weight (Kg)</span>
      <input type='text' onChange={(e) => setWeight(e.target.value)} onKeyDown={
        (e) => { if (e.key === 'Enter') setData(); }
      } />
      <button onClick={setData}>Calculate</button>
    </>
  )
}