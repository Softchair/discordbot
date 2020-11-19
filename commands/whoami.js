exports.run = (client, message, args) => {
  message.channel.send("You are " + message.author.username + "!");
  message.channel.send("Your id is " + message.author);
  message.channel.send("Are you a bot? " + message.author.bot);
};

module.help = {
  name: "Who am I",
  description: "Sends information about you",
  usage: "whoami",
}
