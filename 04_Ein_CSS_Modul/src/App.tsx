import styles from './App.module.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
