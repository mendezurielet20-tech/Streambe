import { useEffect, useState } from 'react'
import { fetchCharacters, type Character} from "../services/services.tsx"
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

function App() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetchCharacters(5)
            .then(data => setCharacters(data))
            .catch(error => {
                console.error("Error al cargar los personajes:", error);
            });
    }, []);

    return (
        <>
        <div className='container'>
                <Card.Group itemsPerRow={1} stackable>
                    {characters.map((character, index) => (
                        <Card key={character.id} className={`estilo${(index % 5) + 1}`} >
                            <Card.Content>
                                <Card.Header>{character.name}</Card.Header>
                                <Card.Meta>{character.species}</Card.Meta>
                            </Card.Content>
                            <div className="extra-info">
                                <img src={character.image} alt={character.name} />
                                <ul>
                                <li>Name: {character.name}</li>
                                <li>Status: {character.status}</li>
                                <li>Specie: {character.species}</li>
                                <li>Origin: {character.origin.name}</li>
                                </ul>
                            </div>
                        </Card>
                    ))}
                </Card.Group>
        </div>

        </>
    )
}

export default App