import axios from 'axios'
import { Card } from '../model/Card'

class MagicCommand {
    async run(cardName: string) {
        try {
            const response = await axios.get('https://api.scryfall.com/cards/named?exact=' + cardName);

            let foundCard: Card = {
                name: response.data.name,
                image: response.data.image_uris.normal,
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {MagicCommand}