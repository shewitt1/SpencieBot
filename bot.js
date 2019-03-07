
const Discord = require('discord.js');
const auth = require('./auth');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch(msg.content){
	case 'ping':
		msg.reply('pong');
		break;
	case'gnome':
		msg.reply('https://www.youtube.com/watch?v=z-zxaKQfW6s');
		break;
  }
});


 
 
client.login(auth.token);
