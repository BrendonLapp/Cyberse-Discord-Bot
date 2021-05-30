import axios from 'axios'
import { Card } from '../model/Card'

class PokemonCommand {
    async run(cardCode: string) {
        try {
            const response = await axios.get('https://api.pokemontcg.io/v2/cards/' + cardCode);

            let foundCard: Card = {
                name: response.data.data.name,
                image: response.data.data.images.large
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {PokemonCommand}