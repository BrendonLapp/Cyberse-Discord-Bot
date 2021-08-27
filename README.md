# Cyberse-Discord-Bot

This is a discord bot that I have developed to fit the needs of a server that me and my friends use.

The bot is hosted live on Heroku and goes down everyday between 3am-9am mountain standard time.

[Add this bot to your own server](https://discord.com/api/oauth2/authorize?client_id=848116082861801522&permissions=8&scope=bot)

## To Run Locally

1. Generate a bot token on Discords website [here](https://discord.com/developers).
2. Create a `.env` file in the `root` folder.
3. Paste in your bot token and set a `prefix`, eg: `;`.
4. To run the bot locally use `npm run start`.

## Commands

> Any command that takes extra parameters in "" do not need the "" and instead just the name or code

- addrelated (Adds a related song based on the current one playing)
- flipcoin
- help
- isplaying
- join
- leave
- matchup *participants names*
- mtg *card name* (Returns an image, cardname and legaility in commander and stander if on the list)
- play *song name or url*
- pokemon *card code* (Returns an image, cardname and legality in standard if on the list)
- queue
- rolldie "number of rolls" (Can be run without any number of rolls argument or up to the max of 6)
- skip
- stop
- yugioh *card name* (Returns an image, cardname and banlist status if on the list)

## Tech used

- TypeScript
- Express
- Discord.JS
- Distube.JS

## Future Work

> Currently none. But I am open to ideas for more commands to add.
