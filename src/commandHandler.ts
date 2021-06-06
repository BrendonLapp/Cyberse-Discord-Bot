import { Client, Message } from "discord.js";
import FlipCoin from "./commands/FlipCoinCommand";
import RollDie from "./commands/RollDieCommand";
import PokemonCommand from './commands/PokemonCommand';
import YugiohCommand from './commands/YugiohCommand';
import MagicCommand from "./commands/MagicCommand";
import Help from "./commands/HelpCommand";
import Play from './commands/PlayCommand';
import Stop from "./commands/StopCommand";
import DisTube from "distube";
import Skip from "./commands/SkipCommand";
import AddRelated from './commands/AddRelatedCommand';

export default class CommandHandler {
    public Handler(message: Message, command: string, args: any, player: DisTube) {
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
            case 'play': {
                Play(message, args, player);
                break;
            }
            case 'stop': {
                Stop(message, player);
                break;
            }
            case 'skip': {
                Skip(message, player);
                break;
            }
            case 'addrelated': {
                AddRelated(message, player);
                break;
            }
        }
    } 
}