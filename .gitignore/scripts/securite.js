const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = ".";

clientDiscord.on('message', function(message) {
    if (message.content.startsWith(PREFIX + "sécurité")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.reply("**Tu es qui pour demander l'aide de la sécurité toi ?! :cop:**");
        }

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("**Je vous ordonne de laisser Charly tranquille! Ne m'obligez pas à faire usage de la force! :cop:**")
                
        }
    }
});

clientDiscord.login(process.env.TOKEN)
