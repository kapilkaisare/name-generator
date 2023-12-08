import { useEffect, useState } from 'react'
import animals from './assets/animals.json'
import adjectives from './assets/adjectives.json'
import LetterSelector from './LetterSelector'
import './App.css'
import { useRandom } from './useRandom'

function App() {

  const [selectedLetter, setSelectedLetter] = useState('A')
  const letterKey = selectedLetter.toLowerCase()
  const animalSelector = useRandom((animals as {[key: string]: string[]})[letterKey])
  const adjectiveSelector = useRandom((adjectives as {[key: string]: string[]})[letterKey])
  const [generatedName, setGeneratedName] = useState('')

  const cycle = () => {
    setGeneratedName(
      adjectiveSelector.pickAtRandom().toLowerCase()
      .concat("-")
      .concat(animalSelector.pickAtRandom().toLowerCase())
      .replaceAll(" ", "-")
    )
  }

  useEffect(cycle, [selectedLetter])

  return (
    <>
      <LetterSelector selectedLetter={selectedLetter} onLetterSelect={setSelectedLetter} />
      <h1>{generatedName}</h1>
      <button type="button" onClick={cycle}>Refresh</button>
    </>
  )
}

export default App
