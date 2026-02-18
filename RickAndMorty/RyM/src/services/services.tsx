export type Character = {
        id: number;
        name: string;
        status: string;
        species: string;
        origin:{
            name: string;
        }
        gender: string;
        image: string;
    };

    type CharactersListResponse = {
        results: Character[];
    };

export async function fetchCharacters(limit: number = 5) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?limit=${limit}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }  
    const data: CharactersListResponse = await response.json();
    return data.results.slice(0, limit);
}