
const Discord = require('discord.js');
const auth = require('./auth');
const { Client, Attachment } = require('discord.js');
client = new Client()
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

client.on('message', message => {
  
  if (message.content === 'it is time to stop') {
      
      const attachment = new Attachment('https://i.kym-cdn.com/entries/icons/original/000/019/785/stopit.png');
      
      message.channel.send(attachment);
  }
});

 
 
client.login(auth.token);
