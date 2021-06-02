import axios from 'axios'
import { Card } from '../model/Card'

class PokemonCommand {
    async run(cardCode: string) {
        try {
            const response = await axios.get('https://api.pokemontcg.io/v2/cards/' + cardCode);

            let foundCard: Card = {
                name: response.data.data.name,
                image: response.data.data.images.large,
                legal: response.data.data.legalities,
            }

            foundCard.displayMessage = "Info for: " + foundCard.name;
            if (foundCard.legal === "Banned") {
                foundCard.displayMessage += "banned :no_entry_sign:"
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {PokemonCommand}