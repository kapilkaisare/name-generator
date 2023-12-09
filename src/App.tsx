import { useEffect, useState } from 'react'
import vowels from './assets/vowels.json'
import consonants from './assets/consonants.json'
import OptionSelector from './OptionSelector'
import './App.css'
import { useRandom } from './useRandom'

function App() {
  const syllableOptions = {
    '1 Syllable': 1,
    '2 Syllables': 2,
    '3 Syllables': 3,
    '4 Syllables': 4,
  }
  const [selectedOption, setSelectedOption] = useState(syllableOptions['1 Syllable'])
  const vowelSelector = useRandom((vowels.data as string[]))
  const consonantSelector = useRandom((consonants.data as string[]))
  const [generatedName, setGeneratedName] = useState('')

  const makeSyllable = (): string => consonantSelector.pickAtRandom()
    .concat(vowelSelector.pickAtRandom())

  const cycle = () => {
    setGeneratedName(
      Array(selectedOption)
      .fill(null)
      .map(() => makeSyllable())
      .join('')
    )
  }

  useEffect(cycle, [selectedOption])

  return (
    <>
      <OptionSelector
        availableOptions={syllableOptions}
        selectedOption={selectedOption}
        onOptionSelect={setSelectedOption}
      />
      <h1>{generatedName}</h1>
      <button type="button" onClick={cycle}>Refresh</button>
    </>
  )
}

export default App
