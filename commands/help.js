const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Commands")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .addFields({
      name: "Commands",
      value: "-Help\n\n-Profilepic\n\n-Repeat\n\n-Ping",
      inline: true
    }, {
      name: "Description",
      value: "Responds with this message\n\nSends users profile picture\n\nRepeats the message, as the bot\n\nTests bots onlineness, also latency",
      inline: true
    }, {
      name: "Arguments",
      value: "None\n\nMention a user\n\nNone\n\nNone",
      inline: true
    }, )
    .setTimestamp()
  message.channel.send(helpEmbed);
}
