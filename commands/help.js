const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Commands")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .addFields({
      name: "Commands",
      value: "-Help\n\n-Profilepic\n\n-Repeat\n\n-Ping\n\n-Whoami\n\n-cf (coinflip)",
      inline: true
    }, {
      name: "Description",
      value: "Responds with this message\n\nSends users profile picture\n\nRepeats the message, as the bot\n\nTests if bots online, also latency\n\nGives you your name, id, and if you are a bot\n\nResponds with heads or tails!",
      inline: true
    }, {
      name: "Arguments",
      value: "None\n\nMention a user\n\nNone\n\nNone\n\nNone\n\nNone",
      inline: true
    }, )
    .setTimestamp()
  message.channel.send(helpEmbed);
};

module.help = {
  name: "Help",
  description: "Displays this message",
  usage: "help",
}
