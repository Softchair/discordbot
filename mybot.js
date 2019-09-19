const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

	guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
	})
    })
})

client.on('ready', () => {
    var generalChannel = client.channels.get("387382140582625287")
    generalChannel.send("Wowee this does a thing now")  
})



bot_secret_token = "BOT TOKEN"

client.login(bot_secret_token)
