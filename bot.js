
const Discord = require('discord.js');
const auth = require('./auth');
const { Client, Attachment } = require('discord.js');
client = new Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch(msg.content){
	case '$ping':
		msg.reply('pong');
		break;
  }
});

client.on("message", message => {
  const channel = message.member.voiceChannel;

if (message == '$join') {
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
  }

  if (message == '$disconnect') {
    channel.destroy().then(connection => {
        console.log('Disconnected')

    }).catch(e => {
      console.error(e);
    });
    }
    

  });
  

  


/*client.on("message", message => {
  const channel = message.member.voiceChannel;
  voiceChannel.disconnect()
});

/* client.on('message', message => {
  
  if (message.content === 'it is time to stop') {
      
      const attachment = new Attachment('https://i.kym-cdn.com/entries/icons/original/000/019/785/stopit.png');
      
      message.channel.send(attachment);
  }
});

*/
 
 
client.login(auth.token);
