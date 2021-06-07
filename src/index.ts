import Discord, { Message } from 'discord.js';
import Config from './config/config.json';
import express, { Request, Response } from 'express';
import CommandHandler from './commandHandler';
import DisTube from 'distube';

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

const prefix = Config.prefix;
const player = new DisTube(client);

player.on('initQueue', (queue) => {
  queue.autoplay = false;
  queue.volume = 50;
});

player.on('error', (message) => {
  console.error();
});

Client.on('message', async (message: Message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const handler = new CommandHandler();
    if (command != undefined) {
      handler.Handler(message, command, args, player);
    }
  }
});

Client.login(Config.token);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
