const discord = require("discord.js");

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",

  run: async (client, message, args) => {

    //Owner only
    if (!message.author.id === "286647094456877056") {
      return message.channel.send("This command can only be used by Softchair!")
    };

    if (!args.length) {
      return message.channel.send("Please specify a status")
    };

    const statusArgArray = message.content.slice(7).trim().split(); //7 is the length of the prefix and command name
    const statusArg = statusArgArray.toString();
    //sets status enmap to const statusArg
    client.status.set("status", statusArg);
    //sets user activity to status enmap
    client.user.setActivity(client.status.get("status"));
    console.log("Activity set to: " + client.status.get("status"));
    await message.channel.send("Updated status");
  }
}
