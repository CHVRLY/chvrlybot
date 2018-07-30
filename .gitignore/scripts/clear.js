const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

clientDiscord.on('message', function(message) {
    if (message.content.startsWith(PREFIX + " clear")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.reply("**Tu te prends pour qui ? Seul Charly a le droit de me commander !**");
        }
        
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                    message.channel.send("**Je viens de nétoyer le salon, c'est tout propre!**")
                }, function(err){message.channel.send("Une erreur est survenue!")})
        }
    }
});

clientDiscord.login(process.env.TOKEN)
