export default function Result({ userIMC }) {

  function useTable() {
    if (userIMC < 18) return (
      <h2>You're underweight, take care of your health! (IMC : {userIMC.toFixed(2)})</h2>
    )
    if (userIMC > 18 && userIMC <= 25) return (
      <h2>You're health, congratulations! (IMC : {userIMC.toFixed(2)})</h2>
    )
    if (userIMC > 25 && userIMC <= 30) return (
      <h2>You're overweight, should i call McDonald? (IMC : {userIMC.toFixed(2)})</h2>
    )
    if (userIMC > 30 && userIMC <= 40) return (
      <h2>You're obese, take care of your health! (IMC : {userIMC.toFixed(2)})</h2>
    )
    if (userIMC > 40) return (
      <h2> You're severely obese, take care of your health! (IMC : {userIMC.toFixed(2)})</h2>
    )
  }

  return (
    <>
      {useTable()}
    </>
  )
}