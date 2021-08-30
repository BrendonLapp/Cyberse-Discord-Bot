import Discord, { Message } from 'discord.js';
import Config from './config/config.json';
import express, { Request, Response } from 'express';
import DisTube from 'distube';
import { commandMap } from './types/commandMap';

const PORT = process.env.PORT || 5000;
const Client = new Discord.Client();

const app = express();
const client = new Discord.Client();
app.use(express.urlencoded({ extended: true }));
app.use('/', (request: Request, response: Response) => {
  response.sendStatus(200);
});

Client.on('ready', () => {
  console.log('I am ready ');
});

console.log(process.env.TOKEN);
console.log(process.env.PREFIX);

const prefix = Config.prefix;
const player = new DisTube(client);

player.on('initQueue', (queue: { autoplay: boolean; volume: number }) => {
  queue.autoplay = false;
  queue.volume = 50;
});

player.on('error', (message: any) => {
  console.error();
});

Client.on('message', async (message: Message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const commandFunction = commandMap[`command ${command}`];

    console.log(commandFunction);

    await commandFunction(message, args, player);
  }
});

Client.login(Config.token);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
