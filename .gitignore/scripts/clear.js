const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = ".";

clientDiscord.on('message', function(message) {
    if (message.content.startsWith(PREFIX + "clear")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.reply("**Et non... tu n'as pas les permissions requises !**");
        }
        
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                    message.channel.send("**Le tchat a été nettoyé!**")
                }, function(err){message.channel.send("Une erreur est survenue!")})
        }
    }
});

clientDiscord.login(process.env.TOKEN)
