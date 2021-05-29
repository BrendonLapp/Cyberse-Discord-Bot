const Config = require('./config.json');
const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log('I am ready ')
});

Client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

Client.login(Config.token);