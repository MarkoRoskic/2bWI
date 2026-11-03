import { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  let [word, setWord] = useState("");

  function addWord() {
    let words = ["Apple", "Football", "Computer", "School"];
    let number = Math.floor(Math.random() * words.length);

    setWord(words[number]);
  }

  return (
    <div className={styles.card}>
      <h2>Meine Karte</h2>

      <button onClick={addWord}>
        Wort anzeigen
      </button>

      <p>{word}</p>
    </div>
  );
}