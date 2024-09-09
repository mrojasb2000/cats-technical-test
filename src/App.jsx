import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://catas.com/cat/says/${firstWords}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then(res => res.json())
  //     .then(data => setFact(data.fact))
  // }, [])

  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      const { fact } = json
      setFact(fact)
      // const threeFirstWord = fact.split(' ').slice(0, 3).join(' ')
      const threeFirstWords = fact.split(' ', 3).join(' ')
      console.log(threeFirstWords)

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImageUrl(url)
        })
    }

    getRandomFact()
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src='{imageUrl}' alt='{threeFirstWords}' />}
    </main>
  )
}
