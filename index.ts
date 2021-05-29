const Config = require('./config.json');
const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log('I am ready ')
});

const prefix = Config.prefix;

Client.on("message", (message) => {
    if (message.content.startsWith(prefix + "rolldie")) {
        const dieRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        message.channel.send("You rolled a: " + dieRoll + "!");
    }

    if (message.content.startsWith(prefix + "flipcoin")) {
        const flipCoin = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        let coinFace;
        if (flipCoin === 1) {
            coinFace = "Heads"
        } else {
            coinFace = "Tails"
        }

        message.channel.send("The coin landed on: " + coinFace + "!");
    }
});

Client.login(Config.token);