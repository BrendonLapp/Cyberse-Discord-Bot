import { Message } from 'discord.js';
import Distube from 'distube';

const IsPlaying = async (message: Message, args: any, player: Distube) => {
  try {
    if (message.member != undefined) {
      if (message.member.voice.channel != undefined) {
        const queue = player.getQueue(message);
        const title = queue.songs[0].info.videoDetails.title;
        message.channel.send(`The current song is: ${title}`);
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

export default IsPlaying;
