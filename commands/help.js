const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const helpEmbed = new Discord.MessageEmbed(
    {
  "embeds": [
    {
      "title": "Commands",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "color": 15142928,
      "fields": [
        {
          "name": "Commands - Description - Args",
          "value": "-Help - This Command - None\n\n-Profilepic - Grabs your or some other users profile picture - Mention a user to get theirs\n\n-Repeat - Repeats your message, as the bot -- None\n\n-Ping - Used for testing the bots online and returns latency - None",
          "inline": true
        }
      ],
      "author": {
        "name": "SoftchairBot"
      }
    }
  ]
});
  message.author.send(helpEmbed);
}