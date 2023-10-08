import styles from './App.module.css'

import { useState } from 'react'
import { Header } from "./components/Header/Header"
import { Quiz } from './components/Quiz/Quiz'
import { Timer } from "./components/Timer/Timer"

export function App() {
  const [ initQuiz, setInitQuiz ] = useState(false)

  function onSetInitQuiz(){
    setInitQuiz(true)
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Timer onSetInitQuiz={onSetInitQuiz}/>
        <Quiz initQuiz={initQuiz}/>
      </main>
    </>
  )
}


