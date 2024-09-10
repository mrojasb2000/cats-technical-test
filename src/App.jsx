import { useState, useEffect } from 'react'
import './App.css'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`

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
          console.log(response)
          const { _id } = response
          const url = `/cat/${_id}/says/${threeFirstWords}`
          setImageUrl(url)
        })
    }

    getRandomFact()
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>

        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
