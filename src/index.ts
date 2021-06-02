import Discord, { Message } from "discord.js";
import Config from './config/config.json';
import RollDieCommand from './commands/RollDieCommand';
import { FlipCoinCommand } from "./commands/FlipCoinCommand";
import { YugiohCommand } from "./commands/YugiohCommand";
import { PokemonCommand } from "./commands/PokemonCommand";
import { MagicCommand } from "./commands/MagicCommand";;
import express, { Request, Response } from "express";

const PORT = process.env.PORT || 5000;
const Client = new Discord.Client();

const app = express();
const client = new Discord.Client();
app.use(express.urlencoded({ extended: true }));
app.use('/', (request: Request, response: Response) => {
  response.sendStatus(200);
});

Client.on('ready', () => {
  console.log('I am ready ')
});

const prefix = Config.prefix;
Client.on("message", async (message: Message) => {

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  console.log(command);

  if (command === "rolldie") {
      let Controller = new RollDieCommand();
      const dieRoll = Controller.run();
      message.channel.send("You rolled a: " + dieRoll + "!");
  }

  if (command === "flipcoin") {
    let Controller = new FlipCoinCommand();
    const coinFace = Controller.run();
    message.channel.send("The coin landed on: " + coinFace + "!");
  }

  if (command === "yugioh") {
    const cardName = args.join(" "); 
    let Controller = new YugiohCommand();
    const response = await Controller.run(cardName);

    if (response == 400) {
      message.channel.send("There is no card with that name");
    }
    else {
      message.channel.send(response.displayMessage);
      message.channel.send(response.image)
    }
  }

  if (command === "pokemon") {
    const cardCode = args.join(" "); 
    let Controller = new PokemonCommand();
    const response = await Controller.run(cardCode);

    if (response == 400) {
      message.channel.send("There is no card with that code");
    }
    else {
      message.channel.send("Info for: " + response.name);
      message.channel.send(response.image)
    }
  }

  if (command === "mtg") {
    const cardName = args.join(" "); 
    let Controller = new MagicCommand();
    const response = await Controller.run(cardName);

    if (response == 400) {
      message.channel.send("There is no card with that code");
    }
    else {
      message.channel.send(response.displayMessage);
      message.channel.send(response.image)
    }
  }
});

Client.login(Config.token);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));