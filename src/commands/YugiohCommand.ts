import axios from 'axios'
import { Card } from '../model/Card'

class YugiohCommand {
    async run(name: string) {
        try {
            const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + name);

            let foundCard: Card = {
                name: response.data.data[0].name,
                image: response.data.data[0].card_images[0].image_url,
            }

            if (response.data.data[0].banlist_info != undefined) {
                foundCard.legal = response.data.data[0].banlist_info.ban_tcg;
            }

            console.log(foundCard);

            foundCard.displayMessage = "Info for: " + foundCard.name;
            if (foundCard.legal != undefined) {
                if (foundCard.legal === "Limited") {
                    foundCard.displayMessage += " Limited :one:"
                }
                if (foundCard.legal === "Semi-Limited") {
                    foundCard.displayMessage += " Semi-Limited :two:"
                }
                if (foundCard.legal === "Banned") {
                    foundCard.displayMessage += " Banned :no_entry_sign:"
                }
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {YugiohCommand}