exports.run = (client, message, args) => {

//funtion to get the user from a mention
function getUserFromMention(mention) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);
    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }
  return client.users.cache.get(mention);
  }
}

  if (args[0]) {
    const user = getUserFromMention(args[0])
    if (!user) {
      return message.reply("Please use a proper mention")
    }
    return message.channel.send(user.username + "'s avatar: " + user.displayAvatarURL());
  }
  else
    return message.channel.send(message.author.username + "'s avatar: " + message.author.displayAvatarURL());
};

module.help = {
  name: "Profile Picture",
  description: "Gets yours or someone elses profile picture",
  usage: "profilepic [User]",
}
