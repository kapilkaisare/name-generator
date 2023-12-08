const startingCode = 65
const endingCode = 91
let letters: string[] = []
for (let k = startingCode; k < endingCode; k++) {
  letters.push(String.fromCharCode(k))
}

interface LetterSelectorProps {
  selectedLetter?: string;
  onLetterSelect?: (letter: string) => void;
}

const LetterSelector = (props: LetterSelectorProps) => {

  return (
    <div className="letter-selector">
      {
        letters.map((letter) => (
          <button
            key={`letterselectorbutton-${letter}`}
            type="button"
            className={`letter ${ letter === props.selectedLetter ? "selected" : ""}`}
            onClick={() => {props.onLetterSelect?.(letter)}}
          >
            {letter}
          </button>
        ))
      }
    </div>
  )
}

export default LetterSelector
