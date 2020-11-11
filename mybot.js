const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Ready for action. Logged in as SoftchairBot");
});


client.on("message", message => {
  if (!message.guild) return;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        //if not .js file ignore
        if (!file.endsWith(".js")) return;
        //load file itself
        const event = require("./events/${file}");
        //get event name from file
        let eventName = file.split(".")[0];
        //each event will be called with client arguemnt
        //followed by normal arguments: message, memebers, ect.
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve("./events/${file}")];
    });
});

client.command = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require("./commands/${file}");
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Store the whole thing in the command Enmap. Not currently running it
    client.commands.set(commandName, props);
  });
});
});

client.login(config.token);
