exports.run = (client, message, args) => {
  //take sentence and makes it an array
  let sentence = message.content.split(' ')
  //.shift alters list remotes the first things in the list
  sentence.shift();
  sentence = sentence.join(' ');

  message.channel.send(sentence);
}