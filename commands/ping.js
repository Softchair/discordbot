exports.run = async(client, message, args) => {
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
};

module.help = {
  name: "Ping",
  description: "Checks bots status and latency",
  usage: "ping",
}
