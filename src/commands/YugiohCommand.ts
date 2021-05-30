import axios from 'axios'
import { Card } from '../model/Card'

class YugiohCommand {
    async run(name: string) {
        try {
            const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + name);
            let legality: string = "";
            let foundCard: Card = {
                name: response.data.data[0].name,
                image: response.data.data[0].card_images[0].image_url
            }
    
            return foundCard;
        } catch {
            return 400;
        }
    }
}

export {YugiohCommand}