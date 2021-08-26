import { Message } from 'discord.js';

const FlipCoin = (message: Message) => {
  const flipCoin = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  let coinFace;
  if (flipCoin === 1) {
    coinFace = 'Heads';
  } else {
    coinFace = 'Tails';
  }
  message.channel.send('The coin landed on: ' + coinFace + '!');
};

export default FlipCoin;
