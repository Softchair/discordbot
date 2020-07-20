const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready for action. Logged in as SoftchairBot');
});


client.on('message', message => {
  if (!message.guild) return;

  if (message.content === '-help') {
    message.reply('Commands: -help -profilepic -repeat ping')
  }

  if(message.content.startsWith('-repeat')) {
    //take sentence and makes it an array
    let sentence = message.content.split(' ')
    //.shift alters list remotes the first things in the list
    sentence.shift();
    sentence = sentence.join(' ');

    message.channel.send(sentence);
  }

  if (message.content === '-profilepic') {
    message.reply(message.author.displayAvatarURL());
 }

  if (message.content === 'ping') {
    message.channel.send('pong')
  }
});

client.login('NjI0MDIzNDgyMjE2MzQ5NzE4.XxSc-g.CT7fHslYiuWs3zeuzICXh-f6Ne8');
