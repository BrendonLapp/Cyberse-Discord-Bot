import axios from 'axios'
import { Card } from '../model/Card'

class MagicCommand {
    async run(cardName: string) {
        try {
            const response = await axios.get('https://api.scryfall.com/cards/named?exact=' + cardName);

            let foundCard: Card = {
                name: response.data.name,
                image: response.data.image_uris.normal,
                legal: response.data.legalities.standard,
                legalCommander: response.data.legalities.commander
            }

            foundCard.displayMessage = "Info for: " + foundCard.name;
            if (foundCard.legal === "not_legal") {
                foundCard.displayMessage += " Standard: not legal :warning: ";
            } else if (foundCard.legal === "banned") {
                foundCard.displayMessage += " Standard: banned :no_entry_sign: "
            }

            if (foundCard.legalCommander === "not_legal") {
                foundCard.displayMessage += " Commander: not legal :warning:";
            } else if (foundCard.legalCommander === "banned") {
                foundCard.displayMessage += " Commander: banned :no_entry_sign:"
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {MagicCommand}