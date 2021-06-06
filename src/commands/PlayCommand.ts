import { Message } from 'discord.js';
import Distube from 'distube';

const Play = async (message: Message, args: any, player: Distube) => {
    try {
        if (message.member != undefined) {
            if (message.member.voice.channel != undefined) {
                const search = args.join(" ");
                player.play(message, search);

            } else {
                message.channel.send('You are not in a voice channel. You must join one to use this commands.');
            }
        }
    } catch {
        console.error;
    }
}

export default Play;
