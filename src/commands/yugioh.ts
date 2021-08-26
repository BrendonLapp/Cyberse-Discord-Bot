import axios from 'axios';
import { Message } from 'discord.js';
import { Card } from '../types/Card';

const Yugioh = async (message: Message, args: any) => {
  console.log(message, args);

  try {
    const cardName = args.join(' ');
    const response = await axios.get(
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + cardName
    );

    const foundCard: Card = {
      name: response.data.data[0].name,
      image: response.data.data[0].card_images[0].image_url
    };

    if (response.data.data[0].banlist_info != undefined) {
      foundCard.legal = response.data.data[0].banlist_info.ban_tcg;
    }

    foundCard.displayMessage = 'Info for: ' + foundCard.name;
    if (foundCard.legal != undefined) {
      if (foundCard.legal === 'Limited') {
        foundCard.displayMessage += ' Limited :one:';
      }
      if (foundCard.legal === 'Semi-Limited') {
        foundCard.displayMessage += ' Semi-Limited :two:';
      }
      if (foundCard.legal === 'Banned') {
        foundCard.displayMessage += ' Banned :no_entry_sign:';
      }
    }

    message.channel.send(foundCard.displayMessage);
    message.channel.send(foundCard.image);
  } catch {
    message.channel.send('There is no card with that code');
  }
};

export default Yugioh;
