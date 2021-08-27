import Discord, { Message } from 'discord.js';

const Help = (message: Message) => {
  const help = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Cyberse Help')
    .setDescription('These are my commands')
    .addFields({ name: 'Prefix', value: process.env.PREFIX, inline: true })
    .addFields({
      name: 'Commands',
      value: `flipcoin \n help \n magic "cardname" \n matchup "participants names"  \n pokemon "cardcode" \n rolldie \n yugioh "cardname"  `,
      inline: true
    })
    .addFields({
      name: 'Music Commands',
      value: `addrelated \n isplaying \n join \n leave \n play "song name" \n queue \n skip \n stop`,
      inline: true
    });
  message.channel.send(help);
};

export default Help;
