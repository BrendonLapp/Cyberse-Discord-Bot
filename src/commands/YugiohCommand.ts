import axios from 'axios'
import { report } from 'process';
import { Card } from '../model/Card'

class YugiohCommand {
    async run(name: string) {
        try {
            const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + name);

            const link = "https://db.ygoprodeck.com/card/?search=" + name
            let foundCard: Card = {
                name: response.data.data[0].name,
                image: response.data.data[0].card_images[0].image_url,
                wikiLink: link.replace(" ", "%20"),
            }
    
            return foundCard;
        } catch {
            return "There is no card with that name";
        }
    }
}

export {YugiohCommand}