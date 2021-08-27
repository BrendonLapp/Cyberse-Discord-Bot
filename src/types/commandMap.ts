import AddRelated from '../commands/addRelated';
import FlipCoin from '../commands/flipCoin';
import Help from '../commands/help';
import IsPlaying from '../commands/isPlaying';
import Join from '../commands/join';
import Leave from '../commands/leave';
import Magic from '../commands/magic';
import Matchups from '../commands/matchup';
import Play from '../commands/play';
import Pokemon from '../commands/pokemon';
import Queue from '../commands/queue';
import RollDie from '../commands/rollDie';
import Skip from '../commands/skip';
import Stop from '../commands/stop';
import Yugioh from '../commands/yugioh';

const commandMap: { [key: string]: any } = {
  'command addrelated': AddRelated,
  'command flipcoin': FlipCoin,
  'command help': Help,
  'command isplaying': IsPlaying,
  'command join': Join,
  'command leave': Leave,
  'command magic': Magic,
  'command matchup': Matchups,
  'command play': Play,
  'command pokemon': Pokemon,
  'command queue': Queue,
  'command rolldie': RollDie,
  'command skip': Skip,
  'command stop': Stop,
  'command yugioh': Yugioh
};

export { commandMap };
