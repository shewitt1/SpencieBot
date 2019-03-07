import { Auth } from './auth'
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'peen') {
    msg.reply('ween');
  }
});

client.on('channel', msg => {
  if(msg.content === 'join') {
    msg.reply('Joined Channel')
    voiceChannel.join()
      .then(connection => console.log('connected'))
      .catch(console.error)
  }
});

client.login(auth.token);
