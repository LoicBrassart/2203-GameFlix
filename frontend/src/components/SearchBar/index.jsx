import axios from "axios";
import { useState } from "react";
import SSearchBar from "./style";

export default function SearchBar() {
  const [needle, setNeedle] = useState("");
  const [results, setResults] = useState([]);

  const hChangeNeedle = (evt) => {
    setNeedle(evt.target.value);
    if (evt.target.value.length) {
      axios
        .get(`http://localhost:5000/search?needle=${evt.target.value}`)
        .then(({ data }) => {
          setResults(data);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <SSearchBar>
      <input
        type="search"
        placeholder="Azul, Valentin, Dernier Bar, ..."
        value={needle}
        onChange={hChangeNeedle}
        className={`search ${needle && "non-empty"}`}
      />
      {results.length > 0 && (
        <ul>
          {results
            .filter((item, idx) => idx < 5)
            .map((result) => {
              return <li key={`${result.type}-${result.id}`}>{result.name}</li>;
            })}
          {results.length >= 5 && (
            <li>... And {results.length - 5} others !</li>
          )}
        </ul>
      )}
    </SSearchBar>
  );
}
