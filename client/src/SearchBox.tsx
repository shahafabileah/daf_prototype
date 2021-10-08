import { useRef } from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  searchTerm: string,
  setSearchTerm: (newSearchTerm:string) => void
}

export default function SearchBox(props:SearchBoxProps) {
  const textInput = useRef<HTMLInputElement>(null);

  return (
    <div className="SearchBox">
        <div className="Prompt">Search for a charity by name:</div>
        <div>
            <input
              ref={textInput}
              className="TextInput"
              type="text"
              defaultValue={props.searchTerm} />
            <input
              className="Button"
              type="button"
              value="Search"
              onClick={
                (event) => {
                  const newSearchTerm = textInput?.current?.value || '';
                  props.setSearchTerm(newSearchTerm);
                }
              } />
        </div>
    </div>
  );
}
