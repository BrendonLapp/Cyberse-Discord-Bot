import { Message } from 'discord.js';
import Distube from 'distube';

const Queue = async (message: Message, player: Distube) => {
    try {
        if (message.member != undefined) {
            if (message.member.voice.channel != undefined) {
                let queue = player.getQueue(message);
                message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
                    `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
                ).join("\n"));

            } else {
                message.channel.send('You are not in a voice channel. You must join one to use this commands.');
            }
        }
    } catch {
        console.error;
    }
}

export default Queue;
