const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";
clientDiscord.login(process.env.TOKEN);

//

clientDiscord.on('message', message => {

if (message.content.startsWith(PREFIX + " info")) {

    const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor('Informations du serveur', clientDiscord.user.avatarURL)
            .setThumbnail(message.guild.iconURL)
            .setColor(3447003)
            .addField('**__Nom du serveur:__**', message.guild.name, true)
            .addField('**__ID du serveur:__**', message.guild.id, true)
            .addField('**__Propriétaire:__**', message.guild.owner, true)
            .addField('**__Membres:__**', message.guild.memberCount, true)
            .setDescription(`** **`)
            
            message.channel.send({embed});
        }
});
