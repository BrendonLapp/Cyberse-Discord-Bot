import { Message } from "discord.js";
import FlipCoin from "./commands/FlipCoinCommand";
import RollDie from "./commands/RollDieCommand";
import PokemonCommand from './commands/PokemonCommand';
import YugiohCommand from './commands/YugiohCommand';
import MagicCommand from "./commands/MagicCommand";
import Help from "./commands/HelpCommand";

export default class CommandHandler {
    public Handler(message: Message, command: string, args: any) {
        switch(command) {
            case 'help': {
                Help(message);
                break;
            }
            case 'flipcoin': {
                FlipCoin(message);
                break;
            }
            case 'rolldie': {
                RollDie(message, args);
                break;
            }
            case 'yugioh': {
                YugiohCommand(message, args);
                break;
            }
            case 'pokemon': {
                PokemonCommand(message, args);
                break;
            }
            case 'mtg': {
                MagicCommand(message, args);
                break;
            }
        }
    } 
}