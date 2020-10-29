const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('Ready for action. Logged in as SoftchairBot');
});


client.on('message', message => {
  if (!message.guild) return;

//Commands - Use config.prefix for prefix "-"
client.on("message", message) => {
  //Dosnt read message if it dosnt start with "-" or if a bot said the message, prevent botception
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith (config.prefix + 'help') {
    message.reply('Commands: -help -profilepic -repeat ping')
  }

  if(message.content.startsWith(config.prefix + 'repeat')) {
    //take sentence and makes it an array
    let sentence = message.content.split(' ')
    //.shift alters list remotes the first things in the list
    sentence.shift();
    sentence = sentence.join(' ');

    message.channel.send(sentence);
  }

  if (message.content.startsWith(config.prefix + 'profilepic') {
    message.reply(message.author.displayAvatarURL());
 }

  if (message.content.startsWith (config.prefix + 'ping') {
    message.channel.send('pong')
  }
});

client.login('config.token');
