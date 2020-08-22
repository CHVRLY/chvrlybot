const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = ".";

clientDiscord.on('message', function(message) {
    if (message.content.startsWith(PREFIX + "sécurité")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.reply(" :man_with_probing_cane_tone1: ");
        }

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("**Je vous ordonne de laisser Charly tranquille ! Ne m'obligez pas à faire usage de la force !**")
                
        }
    }
});

clientDiscord.login(process.env.TOKEN)
