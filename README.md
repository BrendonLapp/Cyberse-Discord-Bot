# Cyberse-Discord-Bot

This is a discord bot that I have developed to fit the needs of a server that me and my friends use.

Run this bot locally by using:
`npm run start`

[Add this bot to your own server](https://discord.com/api/oauth2/authorize?client_id=848116082861801522&permissions=8&scope=bot)

## Commands
> Any command that takes extra parameters in "" do not need the "" and instead just the name or code
+ ;rolldie "number of rolls" (Can be run without an number of rolls argument or up to the max of 6)
+ ;flipcoin
+ ;yugioh *card name* (Returns an image, cardname and banlist status if on the list)
+ ;pokemon *card code* (Returns an image, cardname and legality in standard if on the list)
+ ;mtg *card name* (Returns an image, cardname and legaility in commander and stander if on the list)

## Tech used
The bot itself is hosted on Heroku.

The bot uses TypeScript for it's main language.

## Libraries used
Express and Discord.JS are the main two used.
