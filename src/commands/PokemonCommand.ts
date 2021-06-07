import axios from 'axios';
import { Message } from 'discord.js';
import { Card } from '../model/Card';

const Pokemon = async (message: Message, args: any) => {
  try {
    const cardCode = args.join(' ');
    const response = await axios.get(
      'https://api.pokemontcg.io/v2/cards/' + cardCode
    );

    const foundCard: Card = {
      name: response.data.data.name,
      image: response.data.data.images.large,
      legal: response.data.data.legalities
    };

    foundCard.displayMessage = 'Info for: ' + foundCard.name;
    if (foundCard.legal === 'Banned') {
      foundCard.displayMessage += 'banned :no_entry_sign:';
    }

    message.channel.send('Info for: ' + foundCard.displayMessage);
    message.channel.send(foundCard.image);
  } catch {
    message.channel.send('There is no card with that code');
  }
};

export default Pokemon;
