class RollDieCommand {
  run(rolls: number) {
    if (rolls > 6) {
      return "You can't roll that many dice! The max is 6."
    }

    if (rolls == 0) {
      return "You can't roll 0 dice! You must roll at least one or use ;rolldie with no numbers";
    }

    let message = "You rolled a:";

    if (isNaN(rolls)) {
      const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      message += " " + roll;
      return message;
    }

    let rollTotal = 0;
    for (var index = 0; index < rolls; index++) {
      
      const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      message += " " + roll;
      rollTotal += roll;
      if (index == rolls - 1) {
        message  += "!";
      } else {
        message += " and"
      }
    }
    return message += " For a total of " + rollTotal + "!";
  }
}

export default RollDieCommand
