const Discord = require('discord.js');
const auth = require('./auth');
const { Client, Attachment } = require('discord.js');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };


client = new Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', message => {
  if (message == '$ping') {
    message.reply('pong!');

  }
});



client.on("message", message => {
const channel = message.member.voiceChannel;
if (message == '$join') {
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      console.log("Successfully connected.");
    }).catch(e => {
      console.error(e);
    });
  }

});


client.on("message", message => {
const channel = message.member.voiceChannel;

if (message == '$gnome') {
channel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=t3Ownw6qX4Q', { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
    const attachment = new Attachment('https://i.ytimg.com/vi/z-zxaKQfW6s/maxresdefault.jpg');
      
    message.channel.send(attachment);
  })
  .catch(console.error);
}

});


client.on("message", message => {
const channel = message.member.voiceChannel;
const connection = client.voiceChannel;
if (message == '$disconnect') {
message.guild.voiceConnection.disconnect();
console.log('Disconnected from channel')
}
});
  


 
client.login(auth.token);
