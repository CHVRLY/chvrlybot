const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = ".";

function heure()
{
     var date = new Date();
     var heure = (date.getHours() + 2);
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
};

clientDiscord.on('message', message => {
    if (message.content.startsWith(PREFIX + "heure")) {
            message.channel.send("Si j'en crois ma montre, il est actuellement **" + heure() + "** :clock1:");
        }
});

clientDiscord.login(process.env.TOKEN);
