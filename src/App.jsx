import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox/InputBox'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  const [lyrics, setLyrics] = useState('')

  return (
    <>
      <h1>Find the lyrics of your favourite songs!😉</h1>
      <InputBox setLyrics={setLyrics}/>
      {lyrics && <SearchBox lyrics={lyrics}/>}
    </>
  )
}

export default App
