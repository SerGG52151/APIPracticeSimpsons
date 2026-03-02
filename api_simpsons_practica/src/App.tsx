import { useState } from 'react'
import type { Character } from './lib/api';
import { fetchCharacters } from './lib/api'
import { CaracterCard } from './components/CaracterCard'
import './App.css'

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  return (
    <>
      <div>
        <h1>Simpsons Characters</h1>
        <button onClick={async () => {
          const characters = await fetchCharacters()
          setCharacters(characters)
        }}>
          Load Characters
        </button>
      </div>
      <div className="flex flex-wrap gap-6 p-2 max-w-7xl mx-auto">
        {Array.isArray(characters) && characters.map(character => (
          <CaracterCard key={character.id} character={character} />
        ))}
      </div>
    </>
  )
}

export default App
