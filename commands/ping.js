exports.run = (client, message, args) => {
  message.channel.send("ping-").catch(console.error);
};
