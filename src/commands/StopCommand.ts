import { Message } from 'discord.js';
import Distube from 'distube';

const Stop = async (message: Message, player: Distube) => {
  try {
    if (message.member != undefined) {
      if (message.member.voice.channel != undefined) {
        player.stop(message);
      } else {
        message.channel.send(
          'You are not in a voice channel. You must join one to use this commands.'
        );
      }
    }
  } catch {
    console.error;
  }
};

export default Stop;
