module.exports = (client, message) => {
  //Ignore bots
  if (message.author.bot) return;

  //Ignore message not starting with prefix
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  console.log(message.author);
  console.log(client.command);

  //Standard argument/command name define
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Grab command data from client.commands Enmap
  const cmd = client.command.get(command);

  //If the command doesnt exist, silently exit
  if (!cmd) return;

  //Run command if it exists
  cmd.run(client, message, args);
};
