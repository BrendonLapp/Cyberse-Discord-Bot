import axios from 'axios'
import { Message } from 'discord.js';
import { Card } from '../model/Card'

const Magic = async (message: Message, args: any) => {
    try {
        const cardName = args.join(" ");
        const response = await axios.get('https://api.scryfall.com/cards/named?exact=' + cardName);

        const foundCard: Card = {
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

        message.channel.send("Info for: " + foundCard.displayMessage);
        message.channel.send(foundCard.image)
    } catch {
        message.channel.send("There is no card with that name.");
    }
}

export default Magic;