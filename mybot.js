const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready for action. Logged in as SoftchairBot');
});


client.on('message', message => {
  if (!message.guild) return;

//set prefix
const prefix = "-";
client.on("message", message) => {
  //no message return
  if (message.content.startsWith(prefix)) return;

  if (message.content.startsWith (prefix + 'help') {
    message.reply('Commands: -help -profilepic -repeat ping')
  }

  if(message.content.startsWith(prefix + 'repeat')) {
    //take sentence and makes it an array
    let sentence = message.content.split(' ')
    //.shift alters list remotes the first things in the list
    sentence.shift();
    sentence = sentence.join(' ');

    message.channel.send(sentence);
  }

  if (message.content.startsWith(prefix + 'profilepic') {
    message.reply(message.author.displayAvatarURL());
 }

  if (message.content.startsWith (prefix + 'ping') {
    message.channel.send('pong')
  }
});

client.login('NjI0MDIzNDgyMjE2MzQ5NzE4.XxSc-g.CT7fHslYiuWs3zeuzICXh-f6Ne8');
