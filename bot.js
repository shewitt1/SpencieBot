//TODO:
//Make/add icons to bot
//Music integration
//Image manipulation
//

var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true
});
logger.level = "debug";
// Initialize Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});
bot.on("ready", function(evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function(user, userID, channelID, message, evt) {
  //listens for a command starting with '.'
  if (message.substring(0, 1) == ".") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);

    //default test case .ping
    switch (cmd) {
      case "ping":
        bot.sendMessage({
          to: channelID,
          message: "Pong!"
        });
        break;

    }
    switch (cmd) {
      case "cream":
        bot.sendMessage({
          to: channelID,
          message: "cream"
        });
        break;
    }

    
        const channel = client.channels.get("210915121734615040");
        if (cmd = "join") {
            channel.join();
            console.log("it worked woo");
        }


    }
    }
  ,
);
