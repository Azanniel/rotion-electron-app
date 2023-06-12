import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="text-rotion-400 flex flex-1 items-center justify-center">
      Selecione ou crie um documento
      <Link to="/document">Acessar documento</Link>
    </main>
  )
}
