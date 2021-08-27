import { Message } from 'discord.js';

const Leave = async (message: Message) => {
  try {
    if (message.member != undefined) {
      if (message.member.voice.channel != undefined) {
        if (
          message.guild &&
          message.guild.me &&
          message.guild.me.voice.channel
        ) {
          message.guild.me.voice.channel.leave();
        } else {
          message.channel.send(
            'Something has gone wrong and I am unable to disconnect.'
          );
        }
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

export default Leave;
