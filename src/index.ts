import Discord, { Message } from 'discord.js';
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

const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const player = new DisTube(client);

player.on('initQueue', (queue: { autoplay: boolean; volume: number }) => {
  queue.autoplay = false;
  queue.volume = 50;
});

player.on('error', (message: any) => {
  console.error();
});

if (prefix) {
  Client.on('message', async (message: Message) => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift();

      const commandFunction = commandMap[`command ${command}`];

      console.log(commandFunction);

      await commandFunction(message, args, player);
    }
  });
}

Client.login(token);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
