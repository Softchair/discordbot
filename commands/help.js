const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Commands:")
    .addFields(
      {name: "Command Name:", value: "Help\nProfilepic\nRepeat\nPing", inline: true },
      {name: "Description/Args", value: "This Command\nResponds with a users profile picture - Args: Ping a user to get theirs\nRepeats your message, just as the bot\nResponds with the current latency and API latency, also used as a test command", inline: true });
  message.author.reply(helpEmbed)
}