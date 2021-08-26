import { Message } from 'discord.js';

const RollDie = (message: Message, rolls: number) => {
  if (rolls > 6) {
    return "You can't roll that many dice! The max is 6.";
  }

  if (rolls == 0) {
    return "You can't roll 0 dice! You must roll at least one or use ;rolldie with no numbers";
  }

  let messageBuilder = 'You rolled a:';

  if (isNaN(rolls)) {
    const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    messageBuilder += ' ' + roll;
  }

  let rollTotal = 0;
  for (let index = 0; index < rolls; index++) {
    const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    messageBuilder += ' ' + roll;
    rollTotal += roll;
    if (index == rolls - 1) {
      messageBuilder += '!';
    } else {
      messageBuilder += ' and';
    }
  }
  message.channel.send(messageBuilder);
};

export default RollDie;
