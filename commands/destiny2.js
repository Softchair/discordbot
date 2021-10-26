exports.run = (client, message, args) => {
  //Sentence to be spammed
  let sentence = "Wanna play destiny 2???";

  //let num = args;

  //if num > 25 { num = 25}

  for (let i = 0; i < 5; i++) {
    message.channel.send(sentence);
  };
}

  module.help = {
    name: "Destiny 2",
    description: "Spams asking if you want to play destiny",
    usage: "destiny2 [num of times want to be spammed]"
  }
