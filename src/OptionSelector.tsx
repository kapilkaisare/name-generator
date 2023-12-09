interface OptionSelectorProps {
  availableOptions: {[key: string]: number},
  selectedOption?: number;
  onOptionSelect?: (option: number) => void;
}

const OptionSelector = (props: OptionSelectorProps) => {
  return (
    <div className="option-selector">
      {
        Object.keys(props.availableOptions).map((label) => (
          <button
            key={`optionselectorbutton-${props.availableOptions[label].toString()}`}
            type="button"
            className={`option ${ props.availableOptions[label] === props.selectedOption ? "selected" : ""}`}
            onClick={() => {props.onOptionSelect?.(props.availableOptions[label])}}
          >
            {label}
          </button>
        ))
      }
    </div>
  )
}

export default OptionSelector
