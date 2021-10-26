//const math = require("math.js");
exports.run = (client, message, args) => {
  var random = Math.random()
  console.log(random)
  if (random < 0.5) {
    message.channel.send("Heads!");
  } else if (random > 0.5) {
    message.channel.send("Tails!");
  } else {
    message.channel.send("Perfect even! (reroll)")
  }
};

module.help = {
  name: "Coinflip",
  description: "Flips a coin!",
  usage: "coinflip, cf",
}
