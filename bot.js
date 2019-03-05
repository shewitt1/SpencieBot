//TODO:
//Make/add icons to bot
//Music integration
//Image manipulation
//
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NTUyMzk1MDY3MzUyOTQwNTU5.D1--Yw.ljX_sUFUeKIFhSkLmI5m6u5zmgM');
