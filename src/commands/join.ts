import { Message } from 'discord.js';

const Join = async (message: Message) => {
  try {
    if (message.member != undefined) {
      if (message.member.voice.channel != undefined) {
        message.member.voice.channel.join();
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

export default Join;
