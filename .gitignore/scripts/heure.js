const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

function heure()
{
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
};

clientDiscord.on('message', message => {
    if (message.content.startsWith(PREFIX + " heure")) {
            message.channel.send("Si j'en crois ma montre, il est actuellement **" + heure() + "** :clock1:");
        }
});

clientDiscord.login("NDcyNzM4NjAyOTUwOTgzNjkw.DkB1hg.OzCIvCm_X8Jk6evD6GlF6FcYhOE");
