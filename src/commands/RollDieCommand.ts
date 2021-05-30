class RollDieCommand {
  run() {
    const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return roll;
  }
}

export default RollDieCommand
