import './App.css'
import LlamaApi from "./components/LlamaApi.tsx"
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <>
    <header className="main-header">
        <h1>Rick and Morty - Characters</h1>
      </header>
      <LlamaApi />
      <footer className="main-footer">
        <img src="public/imagenes/logo.png" alt="Logo del sitio"/>
      </footer>
    </>
  )
}

export default App