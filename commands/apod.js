var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const config = require('getconfig');

exports.run = (client, message, args) => {

  //Set up the call request
  var req = new XMLHttpRequest();
  var url = "https://api.nasa.gov/planetary/apod?api_key=";

  req.open("GET", url + config.nasaAPIkey);
  req.send();

  //Gets the data and adds it to vars
  req.addEventListener("load", function() {
    if (req.status == 200 && req.readyState == 4) {
      var response = JSON.parse(req.responseText);
      document.getElementById("title").textContent = response.title;
      var date = document.getElementById("date").textContent = response.date;
      var picture = document.getElementById("pic").src = response.hdurl;
      var info = document.getElementById("explanation").textContent = response.explanation;
    }
  })

  //Send its to the channel
  message.channel.send(picture);
  message.channel.send(date);
  message.channel.send(info);

}

module.help = {
  name: "APOD (Astronomy picture of the day)",
  description: "Send the astrononmy picture of the day, and also information about it",
  usage: "apod",
}
