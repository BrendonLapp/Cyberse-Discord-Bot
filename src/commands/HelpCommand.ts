import Discord, { Message } from "discord.js";
import Config from '../config/config.json';

const Help = (message: Message) => {
    const help = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Cyberse Help')
        .setDescription('These are my commands')
        .addFields(
            { name: 'Prefix', value: Config.prefix, inline: true },
        )
        .addFields(
            { name: 'Commands', value: `help \n flipcoin \n rolldie \n pokemon "cardcode" \n yugioh "cardname" \n magic "cardname"`, inline: true },
        )
    message.channel.send(help);
}

export default Help;