# Cyberse-Discord-Bot

This is a discord bot that I have developed to fit the needs of a server that me and my friends use.

Run this bot locally by using:
`npm run start`
You will also need to update the config.json.example file to match your own bots token and prefix.

[Add this bot to your own server](https://discord.com/api/oauth2/authorize?client_id=848116082861801522&permissions=8&scope=bot)

## Commands

> Any command that takes extra parameters in "" do not need the "" and instead just the name or code

- help
- ;rolldie "number of rolls" (Can be run without an number of rolls argument or up to the max of 6)
- ;flipcoin
- ;yugioh _card name_ (Returns an image, cardname and banlist status if on the list)
- ;pokemon _card code_ (Returns an image, cardname and legality in standard if on the list)
- ;mtg _card name_ (Returns an image, cardname and legaility in commander and stander if on the list)
- ;matchup _participants names_
- ;play _song name or url_
- ;stop
- ;skip
- ;addrelated (Adds a related song based on the current one playing)
- ;queue

## Tech used

The bot itself is hosted live on Heroku and goes down everyday between 3am-9am mountain standard time.

It is written in typescript.

## Libraries used

- Express
- Discord.JS
- Distube.JS

## Future Work

Implement a music playing feature
Expand the existing functionality of the yugioh, pokemon and mtg commands.
