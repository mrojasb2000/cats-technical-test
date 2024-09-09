import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://catas.com/cat/says/${firstWords}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState('lorem upsum cat fact whatever')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
