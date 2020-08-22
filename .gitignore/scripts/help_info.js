const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = ".";

// !c help

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX + "help")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor('RedRoom', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**>** La liste des commande viens de t'étre envoyée en MP !

`)
            
            message.channel.send({embed});
            message.author.createDM().then(channel => {
                const embed = new Discord.RichEmbed();
                embed.setTitle('Voici la liste des commandes :')
                .setAuthor(' ', clientDiscord.user.avatarURL)
                .setColor(3447003)
                .setDescription(
`

__Commandes Principales :__

**.météo <ville>** -> Affiche la météo en direct.
**.sondage <question>** -> Poste un sondage.

__Commandes Secondaires :__

**.heure** -> Affiche l'heure.
**.info** -> Affiche les informations du discord.
**.bot** -> Affiche les informations du bot.

`)
                
                channel.send({embed});
            })
        }
});

// !c info

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX + "bot")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Fiche technique:')
            .setAuthor('Informations de RedRoomBot', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**> Version:** Alpha (v0.001)
**> Auteur:** CHVRLY

`)
            
            message.channel.send({embed});
        }
});

clientDiscord.login(process.env.TOKEN);
