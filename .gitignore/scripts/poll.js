const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

clientDiscord.on('message', message => {

    if (message.content.startsWith(PREFIX + " sondage")) {
        //if (!message.member.roles.find(r => r.name === 'Le Patron'))
        //return message.channel.send("**Cette commande n'est utilisable que par un administrateur !**");
        
        let args = message.content.split(" ").slice(2);
        let question = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setTitle(`__${message.author.username} a lancé un nouveau sondage :__`)
            .setDescription( " **" + question + "** " )
            .setFooter('Ajoute une réaction pour voter.')
            .setColor("0xB40404")
            .setTimestamp()

        message.channel.send(embed).then(function (message) {
            message.react("✅").then(message.react("❎"));

        }).catch(function() {
        });
    }
});

clientDiscord.login(process.env.TOKEN);
