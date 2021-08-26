import { Message } from 'discord.js';

const Matchups = (message: Message, args: any) => {
  const shuffledList = args.sort(() => Math.random() - 0.5);
  let OddOneOut;
  let MatchesToBeMade;

  if (shuffledList.length == 2) {
    message.channel.send(
      'If you are unable to figure out this matchup how will I?'
    );
    return;
  }

  if (shuffledList.length <= 1) {
    message.channel.send(
      'You cannot make matchups for less than a group of 3.'
    );
    return;
  }

  if (shuffledList.length % 2 != 0) {
    OddOneOut = shuffledList.slice(-1);
    shuffledList.pop();
  }

  MatchesToBeMade = shuffledList.length / 2;

  if (MatchesToBeMade != undefined) {
    while (MatchesToBeMade != 0) {
      const matchup = shuffledList.splice(0, 2);
      message.channel.send(matchup[0] + ' VS ' + matchup[1]);
      MatchesToBeMade -= 1;
    }
    if (OddOneOut != undefined) {
      message.channel.send(OddOneOut + ' will have to sit out this round.');
    }
  }
};

export default Matchups;
